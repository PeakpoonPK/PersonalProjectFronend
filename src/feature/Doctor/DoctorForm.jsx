import { useState } from 'react'
import defaultImage from '../../assets/doctor.png'
import { useEffect } from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import InputDoctorForm from './InputDocrtorForm'

export default function DoctorForm() {
    const [allDoctor, setAllDoctor] = useState([])


    const deleteDoctor = async (doctorId) => {
        try {
            await axios.delete(`/admin/${doctorId}`);
            setAllDoctor(allDoctor.filter(el => el.id !== doctorId));
        } catch (err) {
            console.log(err)
        }
    }

    const handleCickDelete = (id) => {
        deleteDoctor(id);
    }


    useEffect(() => {
        axios.get('/admin/doctor')
            .then((res) => setAllDoctor(res.data.doctor))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='flex flex-col'>
            {allDoctor.map((el, doctorId) => {
                const inputDoctor = [
                    { id: 1, title: 'First name', data: `${el.firstNameDoctor || "-"}` },
                    { id: 2, title: 'Last name', data: `${el.lastNameDoctor || "-"}` },
                    { id: 3, title: 'specialist', data: `${el.specialist || "-"}` }
                ]

                return <div
                    key={doctorId}
                    className='p-2 flex'>
                    <div className='flex gap-8 mt-6 border-2 sm:border-2 rounded-3xl border-primary-darker justify-center lg:w-[560px] sm:w-[240px] w-[600px] m-auto relative p-4 '>
                        <div className='w-[160px] h-[160px] overflow-hidden rounded-full shadow-md' >
                            {el.doctorImage ? <img src={el.doctorImage}></img>
                                : (<img src={defaultImage} alt="pet" className='object-cover h-full aspect-square' />)}
                        </div>
                        <div className='pl-10 grid grid-rows-4 grid-flow-col'>
                            {inputDoctor.map(doctorId =>
                                <InputDoctorForm key={doctorId.id} title={doctorId.title} data={doctorId.data} />
                            )}
                            <div className='flex flex-col row-span-2 relative text-sm'>
                                <button className='flex justify-cente absolute bottom-[-80px] right-28 font-normal bg-secondary-main rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'><Link to={`/admin/editdoctor/${el.id}`}>Edit</Link></button>
                                <button
                                    onClick={() => handleCickDelete(el.id)}
                                    className='flex justify-cente absolute bottom-[-80px] right-4 font-normal bg-primary-darker rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div >
    )
}

