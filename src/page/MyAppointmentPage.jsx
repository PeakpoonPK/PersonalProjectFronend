import MainMyAppointment from '../layout/MainMyAppointment'
import SideBarProfile from '../layout/SideBarProfile'


export default function MyAppointmentPage() {
    return (
        <div className="flex flex-col">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarProfile />
            </div>
            <div className="pb-24 h-full bg-slate-50">
                <MainMyAppointment />
            </div>

        </div>
    )
}
