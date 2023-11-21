import MainPetProfile from "../layout/MainPetProfile"
import SideBarProfile from "../layout/SideBarProfile"


export default function PetPage() {
    return (
        <div className="flex flex-col">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarProfile />
            </div>
            <div className="pb-24 h-full bg-slate-50">
                <MainPetProfile />
            </div>

        </div>
    )
}
