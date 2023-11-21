import { Link } from "react-router-dom";
import { useAuth } from '../hooks/use_auth';
export default function SideBarAdmin() {

    const { logout, authUser } = useAuth();

    let manuAdminBar = []
    if (authUser?.isAdmin) {
        manuAdminBar = [
            { id: 1, to: `/admin/doctor`, title: 'Doctor', icon: 'groups' },
            { id: 2, to: '/admin/allappointment', title: 'All Appointment', icon: 'edit_calendar' },
            { id: 3, to: "/", title: 'Log out', onClick: logout, icon: 'logout' }
        ]
    }


    return (
        <div className="w-[25%] bg-semantic-darkCream lg:pt-16 pt-24 h-screen ">
            {authUser?.isAdmin === true ?
                (<ul className=" lg:text-lg  text-semantic-textPrimary flex flex-col  items-center gap-2 sm:items-center w-[100%] pt-4 ">
                    {manuAdminBar.map((el, manuId) => {
                        return <li key={manuId} className="flex flex-col sm:items-center py-4 lg:px-4 px-9  w-[100%] hover:bg-semantic-lightCream hover:cursor-pointer active:bg-white">
                            <Link to={el.to} className="flex gap-4" >
                                <span className="material-symbols-outlined text-3xl font-light">{el.icon}</span>
                                <span className="sm:hidden pt-1.5">{el.title}</span>
                            </Link>
                        </li>
                    })}
                </ul >)
                : null}
        </div >
    )
}
