import { Link } from "react-router-dom";

import { useAuth } from '../hooks/use_auth';

export default function SideBarProfile() {
    const { logout, authUser } = useAuth();
    return (

        <div className="w-[25%] bg-semantic-darkCream lg:pt-16 pt-24 h-screen ">
            <ul className=" lg:text-lg  text-semantic-textPrimary flex flex-col  items-center gap-2 sm:items-center w-[100%] pt-4 ">
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-9  w-[100%] hover:bg-semantic-lightCream hover:cursor-pointer active:bg-white">
                    <Link to={`/profile/${authUser.id}`} className="flex gap-4" >
                        <span className="material-symbols-outlined text-3xl font-light">account_circle</span>
                        <span className="sm:hidden pt-1.5">Profile</span>
                    </Link>
                </li>
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-10 hover:bg-semantic-lightCream w-[100%] hover:cursor-pointer active:bg-white">
                    <Link to={`/pets/${authUser.id}`} className="flex gap-4">
                        <span className="material-symbols-outlined">pets</span>
                        <span className="sm:hidden">My Pets</span>
                    </Link>
                </li>
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-10 hover:bg-semantic-lightCream w-[100%] hover:cursor-pointer active:bg-white">
                    <Link to={`/appointment/${authUser.id}`} className="flex gap-4">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span className="sm:hidden">My Apointment</span>
                    </Link>

                </li>
                <li className="flex flex-col sm:items-center py-4 lg:px-4 px-10 hover:bg-semantic-lightCream w-[100%] hover:cursor-pointer active:bg-white" onClick={logout} >
                    <Link to='/' className="flex gap-4">
                        <span className="material-symbols-outlined">logout</span>
                        <span className='sm:hidden'> Logout</span>
                    </Link>
                </li>
            </ul>
        </div>


    )
}
