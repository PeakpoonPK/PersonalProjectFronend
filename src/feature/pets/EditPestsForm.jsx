import InputErrorMessage from "../auth/InputErrorMessage"
import Joi from 'joi'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../hooks/use_auth"
import Loading from "../../components/Loading"
import defaultImage from '../../assets/paw.png'
import axios from "../../config/axios"
import Swal from "sweetalert2"
import EditInputForm from "../user/EditInputForm"

const EditPetSchema = Joi.object({
    petName: Joi.string().trim().allow(null, ''),
    breed: Joi.string().trim().allow(null, ''),
    age: Joi.string().trim().allow(null, ''),
    sex: Joi.string().trim().allow(null, ''),
    drugAllergy: Joi.string().trim().allow(null, ''),
    Other: Joi.string().trim().allow(null, ''),
    userId: Joi.number().allow(null, '')
})

const validateEditPet = input => {
    const { error } = EditPetSchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}


export default function EditPetsForm() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);
    const { authUser, setAuthUser } = useAuth();
    const [error, setError] = useState({})

    const [input, setInput] = useState({
        petName: '',
        breed: '',
        sex: '',
        age: '',
        Other: '',
        drugAllergy: '',
        userId: ''
    })

    const editPetInput = [
        { id: 1, title: 'PetName', placeholder: 'PetName', value: `${input.petName}`, name: 'petName', errorInput: error.petName || null },
        { id: 2, title: 'Sex', placeholder: 'Sex', value: `${input.sex}`, name: 'sex', errorInput: error.sex || null },
        { id: 3, title: 'breed', placeholder: 'breed', value: `${input.breed}`, name: 'breed', errorInput: error.breed || null },
        { id: 4, title: 'Age', placeholder: 'Age', value: `${input.age}`, name: 'age', errorInput: error.age || null },
        { id: 5, title: 'Allergy', placeholder: 'Allergy', value: `${input.drugAllergy}`, name: 'drugAllergy', errorInput: error.drugAllergy || null },
        { id: 6, title: 'Other', placeholder: 'Other', value: `${input.Other}`, name: 'Other', errorInput: error.Other || null },
    ]

    const { petId } = useParams()
    const Navigate = useNavigate()
    const [selectedPet] = authUser.Pets.filter((el) => (el.id === +petId))

    const editPet = async (updatePet) => {
        try {

            const res = await axios.patch(`/pets/${selectedPet.id}`, updatePet)
            console.log(res.data.updatePet)
            // const newUserInfo = { ...authUser, Pets: [res.data.updatePet] }
            // setAuthUser(newUserInfo)
            Swal.fire({
                icon: 'success',
                title: 'Update My Pet SuccessFul!'
            })
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const petInput = { ...input }
            delete petInput.id
            delete petInput.petImage

            const validationError = validateEditPet(petInput);
            if (validationError) {
                console.log(validationError)
                return setError(validationError);
            }
            const formData = new FormData();
            if (file) {
                formData.append('petImage', file)
            }
            console.log(petInput)
            formData.append('petData', JSON.stringify(petInput))
            // console.log(formData.get('petData'))
            setError({});
            setLoading(true)
            await editPet(formData)
            Navigate(`/pets/${authUser.id}`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    };

    useEffect(() => { setInput(selectedPet) }, [])

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
                    <div className="flex justify-center items-center">
                        {selectedPet.petImage ? (
                            <div className=''>
                                <div
                                    onClick={() => { inputEl.current.click() }}
                                    className="w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
                                    {file ? <img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' /> :
                                        <img src={selectedPet.petImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>}
                                </div>
                            </div>
                        ) :
                            (<div className=''>
                                <div onClick={() => { inputEl.current.click() }}
                                    className='w-[200px] h-[200px] overflow-hidden rounded-full shadow-md'>
                                    {file ? (<img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' />) :
                                        (<img src={defaultImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>)}
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 pt-10">
                        {editPetInput.map(el =>
                            <EditInputForm key={el.id} title={el.title} placeholder={el.placeholder} value={el.value} name={el.name} errorInput={el.errorInput} onChange={handleChangeInput} />
                        )}
                    </div>
                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Update</button>
                </div>)}
            </form>
        </div>
    )
}

