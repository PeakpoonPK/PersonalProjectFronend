import { Link } from "react-router-dom";
import { useAuth } from '../hooks/use_auth';
export default function SideBarAdmin() {
    const { logout, authUser } = useAuth();
    return (
        <div className="w-[25%] bg-semantic-darkCream lg:pt-16 pt-24 h-screen ">
            <ul className=" lg:text-lg  text-semantic-textPrimary flex flex-col  items-center gap-2 sm:items-center w-[100%] pt-4 ">
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-9  w-[100%] hover:bg-semantic-lightCream hover:cursor-pointer active:bg-white">
                    <Link to={`/admin/doctor`} className="flex gap-4" >
                        <span className="material-symbols-outlined text-3xl font-light">groups</span>
                        <span className="sm:hidden pt-1.5">Doctor</span>
                    </Link>
                </li>
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-10 hover:bg-semantic-lightCream w-[100%] hover:cursor-pointer active:bg-white">
                    <Link to={`/`} className="flex gap-4">
                        <span className="material-symbols-outlined">edit_calendar</span>
                        <span className="sm:hidden">All Appointment</span>
                    </Link>
                </li>
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-10 hover:bg-semantic-lightCream w-[100%] hover:cursor-pointer active:bg-white" onClick={logout} >
                    <Link to='/' className="flex gap-4">
                        <span className="material-symbols-outlined">logout</span>
                        <span className='sm:hidden'>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>


    )
}
