import MainEditPet from "../layout/MainEditPet";
import SideBarProfile from "../layout/SideBarProfile"

export default function EditPetPage() {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarProfile />
            </div>
            <div className="pb-24">
                <MainEditPet />
            </div>

        </div>
    )
}
