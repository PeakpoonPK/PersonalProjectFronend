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
            // { path: '/login', element: <LoginPage /> },
            { path: '/booking', element: <SearchBooking /> },
            { path: '/register', element: <RegisterPage /> },
            { path: '/profile/:profileId', element: <ProfilePage /> },
            { path: '/pets/:profileId', element: <ProfilePage /> },
            { path: '/appointment/:profileId', element: <ProfilePage /> }
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
        )
    }

]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
