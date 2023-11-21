import SideBarProfile from "../layout/SideBarProfile";
import MainEditProfile from "../layout/MainEditProfile";


export default function EditProfilePage() {
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarProfile />
            </div>
            <div className="pb-24">
                <MainEditProfile />
            </div>

        </div>
    )
}
