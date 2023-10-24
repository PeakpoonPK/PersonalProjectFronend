import { useNavigate } from 'react-router-dom';
import TimeBookingButton from './TimeBookingButton';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../hooks/use_auth';
import Joi from 'joi'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'



const AddAppointmentSchema = Joi.object({
    date: Joi.string().trim(),
    timePeroid: Joi.string().trim(),
    doctorId: Joi.number(),
    petId: Joi.number()
})
const validateAddAppointment = appointmentInput => {
    const { error } = AddAppointmentSchema.validate(appointmentInput, { abortEarly: false });
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
export default function ChooseTimeInDateForm() {
    const [doctor, setDoctor] = useState([])
    const [click, setClick] = useState('')
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuth()
    const Navigate = useNavigate()
    const myPet = authUser?.Pets

    const [appointmentInput, setAppointmentInput] = useState({
        date: '',
        timePeroid: '',
        doctorId: '',
        petId: ''
    })
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setAppointmentInput({ ...appointmentInput, [e.target.name]: e.target.value })
    }
    const handleSubmitForm = async (e) => {
        try {
            const input = { ...appointmentInput, timePeroid: click }
            console.log(input)
            e.preventDefault();
            const validationError = validateAddAppointment(input);
            if (validationError) {
                return setError(validationError);
            }

            const AddAppointment = async (addAppointment) => {
                try {
                    const res = await axios.post('/booking/add', addAppointment)
                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Create Appointment SuccessFul!'
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            setError({});
            setLoading(true)
            await AddAppointment(input)
            Navigate(`/`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    };

    useEffect(() => {
        axios.get('/admin/doctor')
            .then((res) => setDoctor(res.data.doctor)
            )
            .catch(err => console.log(err))
    }, [])

    return (



        <form onSubmit={handleSubmitForm} >
            <div className='flex flex-col justify-center items-center m-auto pt-8 gap-8 relative'>
                <div className='flex gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main'>Choose Date</label>
                    <input value={appointmentInput.date} onChange={handleChangeInput} type='date' name='date' className='w-96 rounded-lg  text-primary-darker border-none p-2' />
                </div>
                <div className='flex gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main'>Choose Doctor</label>
                    <select onChange={handleChangeInput} value={appointmentInput.doctorId} name='doctorId' className='w-96 rounded-lg text-primary-darker border-none p-2'>
                        <option>First Available Doctor</option>
                        {doctor.map((el, doctorId) => {
                            return <option value={el.id} key={doctorId}>{el.firstNameDoctor} {el.lastNameDoctor}</option>
                        }
                        )}
                    </select>

                </div>
                <div className='flex flex-col gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main pt-'>Choose Time</label>
                    <div className='flex flex-col border-4 border-semantic-darkCream w-[760px] h-[300px] rounded-3xl'>
                        <div >
                            <TimeBookingButton name='timePeroid' setClick={setClick} click={click} />
                        </div>
                    </div>
                </div>
                {authUser ? (<div>
                    <div className='flex gap-4 justify-center items-center text-xl pt-8'>
                        <label className='text-secondary-main'>Choose Your Pet</label>
                        <select value={appointmentInput.petId} name='petId' onChange={handleChangeInput} className='w-96 rounded-lg  text-primary-darker border-none p-2'>
                            <option>Choose Your Pet</option>
                            {myPet.map((el, petId) => {
                                return <option value={el.id} key={petId}>{el.petName}</option>
                            })}
                        </select>
                    </div>
                    <div className='flex gap-4'>
                        <button
                            className='flex flex-col relative bottom-[-80px] left-64 text-xl  font-normal bg-primary-darker rounded-2xl text-white py-2 px-6 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                            confirm
                        </button>
                    </div>
                </div>) : (<div className='flex flex-col justify-center items-center gap-4 pt-24 p-2'>
                    <label className='text-xl'>Please, Log in or Register</label>
                    <div className='flex gap-4 pt-4'>
                        <button className='text-semantic-textPrimary font-normal text-xl rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light ' >
                            <Link to='/login'>Log in</Link></button>
                        <button
                            className='text-semantic-textSecondary font-normal text-xl  rounded-3xl  border-2 border-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light'>
                            <Link to='/register'>Register</Link>
                        </button>
                    </div>
                </div>)}
            </div>
        </form >
    )
}
