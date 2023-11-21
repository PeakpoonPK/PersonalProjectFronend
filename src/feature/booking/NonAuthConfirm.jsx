import React from 'react'
import BookingConfirmForm from './BookingConfirmForm'
import { Link } from 'react-router-dom'

const dataBooking = [
    { id: 1, title: 'Date', data: '-' },
    { id: 2, title: 'Time', data: '-' },
    { id: 3, title: 'Doctor', data: '-' },
    { id: 4, title: 'Room', data: '-' }]

export default function NonAuthConfirm() {
    return (
        <div className='pt-16 relative'>
            <div className='flex flex-col items-center m-auto border-4 border-semantic-darkCream w-[840px] h-[200px] rounded-3xl'>
                <div className='grid grid-cols-2 gap-6 p-10'>
                    {dataBooking.map(el =>
                        <BookingConfirmForm key={el.id} title={el.title} data={el.data}
                        />
                    )}
                </div>

                <div className='flex flex-col justify-center items-center gap-4 pt-24 p-2'>
                    <label className='text-xl'>Please, Log in or Register</label>
                    <div className='flex gap-4 pt-4'>
                        <button className='text-semantic-textPrimary font-normal text-xl rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light ' >
                            <Link to='/login'>Log in</Link></button>
                        <button
                            className='text-semantic-textSecondary font-normal text-xl  rounded-3xl  border-2 border-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light'>
                            <Link to='/register'>Register</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}
