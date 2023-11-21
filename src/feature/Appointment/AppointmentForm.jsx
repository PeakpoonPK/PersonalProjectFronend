import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../config/axios'
import InputAppointmentForm from '../Appointment/InputAppointmentForm'




export default function AppointmentForm() {

    const [allmyAppointment, setAllmyAppointment] = useState([])


    const deleteAppointment = async (appointmentId) => {
        try {
            await axios.delete(`/booking/${appointmentId}`);
            setAllmyAppointment(allmyAppointment.filter(el => el.id !== appointmentId));
            axios.get('/booking/all')
                .then((res) => setAllmyAppointment(res.data.appointment))
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }

    const handleCickDelete = (id) => {
        deleteAppointment(id);
    }


    useEffect(() => {
        axios.get('/booking/all')
            .then((res) => {
                setAllmyAppointment(res.data.appointment)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div div className='flex flex-col' >
            {allmyAppointment.map((el, appointmentId) => {
                const inputAppointment = [
                    { id: 1, title: 'Pet name', data: `${el.pet.petName || "-"}` },
                    { id: 2, title: 'Date', data: `${el.date || "-"}` },
                    { id: 3, title: 'Time', data: `${el.timePeroid || "-"}` },
                    { id: 4, title: 'Doctor', data: `${el.doctor.firstNameDoctor + ' ' + el.doctor.lastNameDoctor || "-"}` },
                    { id: 5, title: 'Room', data: `${el.doctor.specialist || "-"}` }
                ]

                return <div
                    key={appointmentId}
                    className='p-2 flex'>
                    <div className='flex gap-8 mt-6 border-2 sm:border-2 rounded-3xl border-primary-darker justify-center lg:w-[560px] sm:w-[240px] w-[720px] m-auto relative p-4 '>
                        <div className='pl-10 grid grid-rows-3 grid-flow-col gap-2'>
                            {inputAppointment.map(appointmentId =>
                                <InputAppointmentForm key={appointmentId.id} title={appointmentId.title} data={appointmentId.data} />
                            )}
                            <div className='flex flex-col row-span-2 relative text-sm'>
                                {/* <button className='flex justify-cente absolute bottom-[-40px] right-28 font-normal bg-secondary-main rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'><Link to={`/booking`}>Edit</Link></button> */}
                                <button
                                    onClick={() => handleCickDelete(el.id)}
                                    className='flex justify-cente absolute bottom-[-40px] right-10 font-normal bg-primary-darker rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            })
            }

        </div >
    )
}
