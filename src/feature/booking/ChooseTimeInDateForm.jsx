import { Link } from 'react-router-dom';
import TimeBookingButton from './TimeBookingButton';

export default function ChooseTimeInDateForm() {

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
                        <option></option>
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
                    <Link to='/confirm'>Confirm</Link>
                </button>
            </div>
        </form>
    )
}
