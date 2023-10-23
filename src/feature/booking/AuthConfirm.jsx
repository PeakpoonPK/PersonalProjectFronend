import React from 'react'
import BookingConfirmForm from './BookingConfirmForm'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/use_auth'

const dataBooking = [
    { id: 1, title: 'Date', data: '-' },
    { id: 2, title: 'Time', data: '-' },
    { id: 3, title: 'Doctor', data: '-' },
    { id: 4, title: 'Room', data: '-' },
]



export default function () {
    const { authUser, setAuthUser } = useAuth()
    const myPet = authUser.Pets
    console.log(myPet)



    return (
        <div className='pt-16 relative'>
            <div className='flex flex-col items-center m-auto border-4 border-semantic-darkCream w-[840px] h-[200px] rounded-3xl'>
                <div className='grid grid-cols-2 gap-6 p-10'>
                    {dataBooking.map(el =>
                        <BookingConfirmForm key={el.id} title={el.title} data={el.data}
                        />
                    )}
                </div>
                <div className='flex gap-4 justify-center items-center text-xl pt-24'>
                    <label className='text-secondary-main'>Choose Your Pet</label>
                    <select className='w-96 rounded-lg  text-primary-darker border-none p-2'>
                        <option>Choose Your Pet</option>
                        {myPet.map((el, myPetId) => {
                            return <option key={myPetId}>{el.petName}</option>
                        })}
                    </select>
                </div>
                <div className='flex gap-4'>
                    <button className='flex flex-col relative bottom-[-80px] left-64 text-xl  font-normal bg-secondary-main rounded-2xl text-white py-2 px-6 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'>
                        <Link to='/booking'>Back</Link></button>
                    <button
                        className='flex flex-col relative bottom-[-80px] left-64 text-xl  font-normal bg-primary-darker rounded-2xl text-white py-2 px-6 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                        <Link to='/'>confirm</Link>
                    </button>
                </div>
            </div>
        </div >

    )
}
