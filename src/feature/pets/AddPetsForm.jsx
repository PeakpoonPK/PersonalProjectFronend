import InputErrorMessage from "../auth/InputErrorMessage"
import Joi from 'joi'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "../../hooks/use_auth"


const AddPetSchema = Joi.object({
    petName: Joi.string().trim(),
    breed: Joi.string().trim(),
    age: Joi.string().trim(),
    sex: Joi.string().trim(),
    drugAllergy: Joi.string().trim(),
    other: Joi.string().trim(),
    userId: Joi.number()
})

const validateAddPet = input => {
    const { error } = AddPetSchema.validate(input, { abortEarly: false });
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
    // const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);
    const { authUser } = useAuth()

    useEffect(() => {
        setInput({ ...authUser })
    }, [])

    const [input, setInput] = useState({
        petName: '',
        breed: '',
        sex: '',
        age: '',
        other: '',
        drugAllergy: '',
        userId: ''
    })

    const { AddPet } = useAuth();
    const Navigate = useNavigate()
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = e => {
        const inputCheck = { ...input }

        e.preventDefault();

        const validationError = validateAddPet(input);
        if (validationError) {
            return setError(validationError);
        }

        const formData = new FormData();
        console.log('first')
        if (file) {
            formData.append('petImage', file)
        }
        formData.append('petData', JSON.stringify(inputCheck))

        console.log(formData.get('petData'))
        setError({});
        AddPet(formData);
        Navigate(`/pets/${authUser.id}`)
    };

    return (
        <div>
            <form
                onSubmit={handleSubmitForm}
                className='flex flex-col gap-8 mt-6 border-4 sm:border-2 rounded-3xl border-secondary-darker justify-center lg:w-[560px] sm:w-[240px] w-[600px] m-auto relative pb-24 '>
                <div>
                    {/* <input
                        type="file"
                        className="hidden"
                        ref={inputEl}
                        onChange={e => {
                            if (e.target.files[0]) {
                                setFile(e.target.files[0])
                            }
                        }}
                    /> */}
                    <div className="pl-[200px] pt-10">
                        <div
                            onClick={() => { inputEl.current.click() }}
                            className="w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
                            {file ? (<img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' />) :
                                (<span className="material-symbols-outlined w-[200px] h-[200px] flex m-auto sm:h-24 sm:w-24 rounded-full  justify-center bg-primary-light text-white items-center sm:text-[60px] text-[80px] font-extralight">person</span>)}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 pt-10">
                        <div className='flex flex-col '>
                            <input
                                type='text'
                                placeholder='Name'
                                value={input.petName}
                                name='petName'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.petName ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.petName} />}
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='sex'
                                placeholder='Sex'
                                value={input.sex}
                                name='sex'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.sex ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.sex} />}
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='breed'
                                placeholder='Breed'
                                value={input.breed}
                                name='breed'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.breed ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.breed} />}
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='age'
                                placeholder='age'
                                value={input.age}
                                name='age'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.age ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.age} />}
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='drugAllergy'
                                placeholder='drugAllergy'
                                value={input.drugAllergy}
                                name='drugAllergy'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.drugAllergy ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.drugAllergy} />}
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='other'
                                placeholder='other'
                                value={input.other}
                                name='other'
                                onChange={handleChangeInput}
                                className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.other ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                            {error && <InputErrorMessage message={error.other} />}
                        </div>
                    </div>
                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Add</button>
                </div>
            </form>
        </div>
    )
}
