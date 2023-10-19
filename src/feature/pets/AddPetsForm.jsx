import Joi from 'joi'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../hooks/use_auth"
import Loading from "../../components/Loading"
import defaultImage from '../../assets/paw.png'
import EditInputForm from "../user/EditInputForm"


const AddPetSchema = Joi.object({
    petName: Joi.string().trim(),
    breed: Joi.string().trim(),
    age: Joi.string().trim(),
    sex: Joi.string().trim(),
    drugAllergy: Joi.string().trim(),
    Other: Joi.string().trim(),
    userId: Joi.number()
})

const validateAddPet = petinput => {
    console.log(petinput)
    const { error } = AddPetSchema.validate(petinput, { abortEarly: false });
    console.log(error);
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}

export default function AddpetsForm() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);
    const { authUser } = useAuth()




    const [petInput, setPetInput] = useState({
        petName: '',
        breed: '',
        sex: '',
        age: '',
        Other: '',
        drugAllergy: '',
        userId: ''
    })

    const { AddPet } = useAuth();
    const Navigate = useNavigate()
    const [error, setError] = useState({});

    const addPetInput = [
        { id: 1, title: 'PetName', placeholder: 'PetName', value: `${petInput.petName}`, name: 'petName', errorInput: error.petName || null },
        { id: 2, title: 'Sex', placeholder: 'Sex', value: `${petInput.sex}`, name: 'sex', errorInput: error.sex || null },
        { id: 3, title: 'breed', placeholder: 'breed', value: `${petInput.breed}`, name: 'breed', errorInput: error.breed || null },
        { id: 4, title: 'Age', placeholder: 'Age', value: `${petInput.age}`, name: 'age', errorInput: error.age || null },
        { id: 5, title: 'Allergy', placeholder: 'Allergy', value: `${petInput.drugAllergy}`, name: 'drugAllergy', errorInput: error.drugAllergy || null },
        { id: 6, title: 'Other', placeholder: 'Other', value: `${petInput.Other}`, name: 'Other', errorInput: error.Other || null },
    ]

    const handleChangeInput = e => {
        setPetInput({ ...petInput, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        try {
            const userId = +authUser.id
            const inputCheck = { ...petInput, userId }

            console.log(inputCheck)
            e.preventDefault();


            const validationError = validateAddPet(inputCheck);
            if (validationError) {
                return setError(validationError);
            }

            const formData = new FormData();

            if (file) {
                formData.append('petImage', file)
            }

            formData.append('petData', JSON.stringify(inputCheck))
            console.log(formData.get('petData'))

            setError({});
            setLoading(true)
            await AddPet(formData)
            Navigate(`/pets/${authUser.id}`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    };

    return (
        <div>
            <form
                onSubmit={handleSubmitForm}
                className='flex flex-col gap-8 mt-6 border-4 sm:border-2 rounded-3xl border-secondary-darker justify-center lg:w-[560px] sm:w-[240px] w-[600px] m-auto relative pb-24 h-[720px] '>
                {loading ? <Loading /> : (<div>
                    <input
                        type="file"
                        className="hidden"
                        ref={inputEl}
                        onChange={e => {
                            if (e.target.files[0]) {
                                setFile(e.target.files[0])
                            }
                        }}
                    />
                    <div className="pl-[200px] pt-10">
                        <div
                            onClick={() => { inputEl.current.click() }}
                            className="w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
                            {file ? (<img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' />) :

                                (<img src={defaultImage} className="object-cover h-full aspect-square" />)}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 pt-10">
                        {addPetInput.map(el =>
                            <EditInputForm key={el.id} title={el.title} placeholder={el.placeholder} value={el.value} name={el.name} errorInput={el.errorInput} onChange={handleChangeInput} />
                        )}
                    </div>
                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Add</button>
                </div>)}
            </form>
        </div>
    )
}
