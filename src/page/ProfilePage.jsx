import { Link } from "react-router-dom";

import { useAuth } from '../hooks/use_auth';
import SideBarProfile from "../layout/SideBarProfile";
import MainProfile from "../layout/MainProfile";



export default function ProfilePage() {
    const { logout } = useAuth();

    return (
        <div >
            <div>
                <SideBarProfile />
            </div>
            <div>
                <MainProfile />
            </div>

        </div>
    )
}

