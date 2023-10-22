import { Link } from 'react-router-dom';
import PetsForm from '../feature/pets/PetsForm';
import { useAuth } from '../hooks/use_auth';
import DoctorForm from '../feature/Doctor/DoctorForm'



export default function MainDoctorProfile() {
    const { authUser } = useAuth()

    return (
        <div className='flex flex-col w-[75%] lg:pt-24 pt-32  absolute right-0 gap-8 bg-slate-50 h-' >
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-semantic-textPrimary'>All doctor</div>
            <div className='flex justify-end pr-56'>
                <button className="flex text-xl text-primary-darker border-2 py-2 px-4 border-primary-darker rounded-xl hover:cursor-pointer hover:bg-primary-lightest active:bg-primary-light ">
                    <Link to={`/admin/doctor/add`}>Add</Link>
                </button>
            </div>
            <div className='h-full bg-slate-50 pb-10'>
                <DoctorForm />
            </div>
        </div>
    )
}
