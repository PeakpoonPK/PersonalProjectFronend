import MainAddDoctor from "../layout/MainAddDoctor";
import SideBarAdmin from "../layout/SideBarAdmin";

export default function AddDoctorPage() {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarAdmin />
            </div>
            <div className="pb-24">
                <MainAddDoctor />
            </div>
        </div>
    )
}
