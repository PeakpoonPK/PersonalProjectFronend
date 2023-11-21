import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import TodayAvailable from "../page/TodayAvailable";
import Service from "../page/Service";
import About from "../page/About"
import SearchBooking from "../page/SearchBooking"
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/LogInPage"
import RegisterPage from "../page/RegisterPage"
import RedirectIfAuthenticated from "../feature/auth/RedirectAuthenticated";
import ProfilePage from '../page/ProfilePage'
import PetPage from '../page/PetPage'
import MyAppointmentPage from '../page/MyAppointmentPage'
import EditProfilePage from '../page/EditProfilePage'
import AddPetPage from "../page/AddPetPage";
import EditPetPage from "../page/EditPetPage";
import DoctorPage from "../page/DoctorPage"
import AddDoctorPage from "../page/AddDoctorPage";
import EditDoctorPage from '../page/EditDoctorPage'
import AllAppointmentPage from "../page/AllAppointmentPage";
import RedirectIfAdmin from "../feature/auth/RedirectAdmin";
import RedirectIfUser from "../feature/auth/RedirectUser";



const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div className="bg-slate-50 h-screen relation" >
                <Header />
                <div>
                    < Outlet />
                </div>
            </div>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/today', element: <TodayAvailable /> },
            { path: '/service', element: <Service /> },
            { path: '/about', element: <About /> },
            { path: '/booking', element: <SearchBooking /> }
        ]
    },

    {
        path: '/login',
        element: (
            <div className="bg-slate-50 h-screen relation">
                <Header />
                <div>
                    <RedirectIfAuthenticated>
                        <LoginPage />
                    </RedirectIfAuthenticated>
                </div>
            </div>
        ),

    },
    {
        path: '/register',
        element: (
            <div className="bg-slate-50 h-screen relation">
                <Header />
                <div>
                    <RedirectIfAuthenticated>
                        <RegisterPage />
                    </RedirectIfAuthenticated>
                </div>
            </div>
        )
    },

    {
        path: '/admin',
        element: (
            <div className="bg-slate-50 h-screen relation">
                <Header />
                <div>
                    <RedirectIfAdmin>
                        <Outlet />
                    </RedirectIfAdmin>
                </div>
            </div>
        )
        , children: [
            { path: '/admin/doctor', element: <DoctorPage /> },
            { path: '/admin/doctor/add', element: <AddDoctorPage /> },
            { path: '/admin/editdoctor/:doctorId', element: <EditDoctorPage /> },
            { path: '/admin/allappointment', element: <AllAppointmentPage /> },
        ]
    },
    {
        path: '/',
        element: (
            <div className="bg-slate-50 h-screen relation">
                <Header />
                <div>
                    <RedirectIfUser>
                        <Outlet />
                    </RedirectIfUser>
                </div>
            </div>
        )
        , children: [
            { path: '/booking', element: <SearchBooking /> },
            { path: '/profile/:profileId', element: <ProfilePage /> },
            { path: '/profile/:profileId/editProfile', element: <EditProfilePage /> },
            { path: '/pets/:profileId', element: <PetPage /> },
            { path: '/pets/add/:profileId', element: <AddPetPage /> },
            { path: '/pets/editpet/:petId', element: <EditPetPage /> },
            { path: '/appointment/:profileId', element: <MyAppointmentPage /> },
        ]
    }

]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
