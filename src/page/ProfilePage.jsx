
import SideBarProfile from "../layout/SideBarProfile";
import MainProfile from "../layout/MainProfile";



export default function ProfilePage() {

    return (
        <div className="flex">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarProfile />
            </div>
            <div className="pb-24">
                <MainProfile />
            </div>

        </div>
    )
}

