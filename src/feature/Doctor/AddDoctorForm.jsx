import Joi from 'joi'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Loading from "../../components/Loading"
import defaultImage from '../../assets/doctor.png'
import EditInputForm from "../user/EditInputForm"
import axios from '../../config/axios'
import Swal from 'sweetalert2'


const AddDoctorSchema = Joi.object({
    firstNameDoctor: Joi.string().trim(),
    lastNameDoctor: Joi.string().trim(),
    specialist: Joi.string().trim(),
})

const validateAddDoctor = doctorInput => {
    console.log(doctorInput)
    const { error } = AddDoctorSchema.validate(doctorInput, { abortEarly: false });
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

export default function AddDoctorForm() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);

    const [doctorInput, setDoctorInput] = useState({
        firstNameDoctor: '',
        lastNameDoctor: '',
        specialist: ''
    })

    const Navigate = useNavigate()
    const [error, setError] = useState({});

    const addDoctorInput = [
        { id: 1, title: 'First name', placeholder: 'First name', value: `${doctorInput.firstNameDoctor}`, name: 'firstNameDoctor', errorInput: error.firstNameDoctor || null },
        { id: 2, title: 'Last name', placeholder: 'Last name', value: `${doctorInput.lastNameDoctor}`, name: 'lastNameDoctor', errorInput: error.lastNameDoctor || null },
        { id: 3, title: 'Specialist', placeholder: 'Specialist', value: `${doctorInput.specialist}`, name: 'specialist', errorInput: error.specialist || null }
    ]

    const handleChangeInput = e => {
        setDoctorInput({ ...doctorInput, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        try {
            const input = { ...doctorInput }
            e.preventDefault();


            const validationError = validateAddDoctor(input);
            if (validationError) {
                return setError(validationError);
            }
            const formData = new FormData();

            if (file) {
                formData.append('doctorImage', file)
            }
            formData.append('doctorData', JSON.stringify(input))

            const AddDoctor = async (addDoctor) => {
                try {
                    const res = await axios.post('/admin/add', addDoctor)
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Add Doctor SuccessFul!'
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            setError({});
            setLoading(true)
            await AddDoctor(formData)
            Navigate(`/admin/doctor`)
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
                        {addDoctorInput.map(el =>
                            <EditInputForm key={el.id} title={el.title} placeholder={el.placeholder} value={el.value} name={el.name} errorInput={el.errorInput} onChange={handleChangeInput} />
                        )}
                    </div>
                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Add</button>
                </div>)}
            </form>
        </div>
    )
}
