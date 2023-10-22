
import Joi from 'joi'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Loading from "../../components/Loading"
import defaultImage from '../../assets/doctor.png'
import axios from "../../config/axios"
import Swal from "sweetalert2"
import EditInputForm from "../user/EditInputForm"

const EditDoctorSchema = Joi.object({
    firstNameDoctor: Joi.string().trim(),
    lastNameDoctor: Joi.string().trim(),
    specialist: Joi.string().trim(),
})

const validateEditDoctor = input => {
    const { error } = EditDoctorSchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}

export default function EditDoctorForm() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);
    const [doctor, setDoctor] = useState({})
    const [error, setError] = useState({})


    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        specialist: ''
    })

    const { doctorId } = useParams()
    // const [selectedDoctor] = Response.doctor.filter((el) => (el.id === +doctorId))


    const Navigate = useNavigate()


    const editDoctor = async (updateDoctor) => {
        try {
            const res = await axios.patch(`/admin/${doctorId}`, updateDoctor)
            console.log(res.data.updateDoctor)
            Swal.fire({
                icon: 'success',
                title: 'Update Doctor SuccessFul!'
            })
            axios.get(`/admin/${doctorId}`)
                .then((res) => { setInput(res.data.doctor) })
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
            const doctorInput = { ...input }
            delete doctorInput.id
            delete doctorInput.doctorImage


            const validationError = validateEditDoctor(doctorInput);
            if (validationError) {
                console.log(validationError)
                return setError(validationError);
            }
            const formData = new FormData();
            if (file) {
                formData.append('doctorImage', file)
            }
            console.log(doctorInput)
            formData.append('doctorData', JSON.stringify(doctorInput))
            // console.log(formData.get('petData'))
            setError({});
            setLoading(true)
            await editDoctor(formData)
            Navigate(`/admin/doctor`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    };



    useEffect(() => {
        axios.get(`/admin/${doctorId}`)
            .then((res) => {
                console.log(res.data.doctor)
                setDoctor(res.data.doctor)
                setInput(res.data.doctor)
            })
            .catch(err => console.log(err))
    }, [])


    const editDoctorInput = [
        { id: 1, title: 'First name', placeholder: 'First name', value: `${input.firstNameDoctor}`, name: 'firstNameDoctor', errorInput: error.firstNameDoctor || null },
        { id: 2, title: 'Last name', placeholder: 'Last name', value: `${input.lastNameDoctor}`, name: 'lastNameDoctor', errorInput: error.lastNameDoctor || null },
        { id: 3, title: 'Specialist', placeholder: 'Specialist', value: `${input.specialist}`, name: 'specialist', errorInput: error.specialist || null },
    ]



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
                        {doctor.doctorImage ? (
                            <div className=''>
                                <div
                                    onClick={() => { inputEl.current.click() }}
                                    className="w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
                                    {file ? <img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' /> :
                                        <img src={doctor.doctorImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>}
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
                        {editDoctorInput.map(el =>
                            <EditInputForm key={el.id} title={el.title} placeholder={el.placeholder} value={el.value} name={el.name} errorInput={el.errorInput} onChange={handleChangeInput} />
                        )}
                    </div>

                    <button className='flex absolute justify-center bottom-4 right-10 lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Update</button>
                </div>)}
            </form>
        </div>
    )
}

