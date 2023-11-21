import SideBarAdmin from '../layout/SideBarAdmin'
import MainEditDoctor from '../layout/MainEditDoctor'

export default function EditDoctorPage() {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarAdmin />
            </div>
            <div className="pb-24">
                <MainEditDoctor />
            </div>

        </div>
    )
}
