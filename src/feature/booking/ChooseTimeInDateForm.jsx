import { Link } from 'react-router-dom';
import TimeBookingButton from './TimeBookingButton';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../../hooks/use_auth';

export default function ChooseTimeInDateForm() {
    const [doctor, setDoctor] = useState([])
    const { authUser } = useAuth()

    useEffect(() => {
        axios.get('/admin/doctor')
            .then((res) => setDoctor(res.data.doctor)
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <form >
            <div className='flex flex-col justify-center items-center m-auto pt-8 gap-8 relative'>
                <div className='flex gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main'>Choose Date</label>
                    <input type='date' className='w-96 rounded-lg  text-primary-darker border-none p-2' />
                </div>
                <div className='flex gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main'>Choose Doctor</label>
                    <select className='w-96 rounded-lg  text-primary-darker border-none p-2'>
                        <option>First Available Doctor</option>
                        {doctor.map((el, doctorId) => {
                            return <option key={doctorId}>{el.firstNameDoctor} {el.lastNameDoctor}</option>
                        }
                        )}
                    </select>

                </div>
                <div className='flex flex-col gap-4 justify-center items-center text-xl'>
                    <label className='text-secondary-main pt-'>Choose Time</label>
                    <div className='flex flex-col border-4 border-semantic-darkCream w-[760px] h-[300px] rounded-3xl'>
                        <div >
                            <TimeBookingButton />
                        </div>
                    </div>
                </div>
                <button
                    className='flex flex-col relative bottom-0 left-64 text-xl  font-normal bg-primary-darker rounded-2xl text-white py-2 px-6 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                    {authUser ? (<Link to={`/confirm/${authUser.id}`}>Confirm</Link>) : <Link to='/confirm/nonauth'>Confirm</Link>}

                </button>
            </div>
        </form >
    )
}
