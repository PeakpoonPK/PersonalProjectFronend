import InputErrorMessage from "../auth/InputErrorMessage"
import Joi from 'joi'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../hooks/use_auth"
import Loading from "../../components/Loading"
import defaultImage from '../../assets/paw.png'
import axios from "../../config/axios"
import { Children } from "react"
import Swal from "sweetalert2"

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
    const [newuUpdatePet, setNewUpdatePet] = useState(null)
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
                                        (<span className="material-symbols-outlined w-[200px] h-[200px] flex m-auto sm:h-24 sm:w-24 rounded-full  justify-center bg-primary-light text-white items-center sm:text-[60px] text-[80px] font-extralight">person</span>)}
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 pt-10">
                        <div className='flex flex-col '>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Name</label>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    value={input.petName}
                                    name='petName'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.petName ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.petName} />}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Sex</label>
                                <input
                                    type='sex'
                                    placeholder='Sex'
                                    value={input.sex}
                                    name='sex'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.sex ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.sex} />}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Breed</label>
                                <input
                                    type='breed'
                                    placeholder='Breed'
                                    value={input.breed}
                                    name='breed'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.breed ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.breed} />}
                            </div></div>
                        <div className='flex flex-col'>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Age</label>
                                <input
                                    type='age'
                                    placeholder='age'
                                    value={input.age}
                                    name='age'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.age ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.age} />}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Allergy</label>
                                <input
                                    type='drugAllergy'
                                    placeholder='drugAllergy'
                                    value={input.drugAllergy}
                                    name='drugAllergy'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.drugAllergy ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.drugAllergy} />}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className="flex gap-4">
                                <label className='text-xl text-primary-darker'>Other</label>
                                <input
                                    type='Other'
                                    placeholder='Other'
                                    value={input.Other}
                                    name='Other'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.Other ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.Other} />}
                            </div>
                        </div>
                    </div>
                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Update</button>
                </div>)}
            </form>
        </div>
    )
}

