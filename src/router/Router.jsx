import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import TodayAvailable from "../page/TodayAvailable";
import Service from "../page/Service";
import About from "../page/About"
import SearchBooking from "../page/SearchBooking"
import Header from "../layout/header";
import { Outlet } from "react-router-dom";
import LoginPage from "../page/LogInPage"


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
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
            { path: '/aboout', element: <About /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/booking', element: <SearchBooking /> }
        ]
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
