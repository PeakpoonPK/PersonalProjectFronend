import logo from '../assets/logoBrand.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/use_auth';

export default function Header() {
    const { logout, authUser } = useAuth();
    const regularheader = 'text-semantic-textPrimary font-normal text-lg hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 rounded-3xl active:bg-primary-light';
    const dropdownDesign = 'text-white font-normal text-lg hover:cursor-pointer hover:bg-primary-dark px-4 py-2 active:bg-primary-darker';

    return (
        <header className='bg-slate-50 h-24 items-center flex justify-between fixed top-0 left-0 right-0 z-10'>
            <div className='flex gap-4 items-center px-16 '>
                <img src={logo} alt='logo' className='w-16 ' />
                <h1 className='text-semantic-textPrimary font-semibold text-2xl '>Animal Hospital</h1>
            </div>
            <div>
                <ul className='flex gap-2 px-16 items-center'>
                    <li
                        className={regularheader}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li
                        className={regularheader}>
                        <Link to='/today'>
                            Today's Available
                        </Link>
                    </li>
                    <div>
                        <details className="dropdown dropdown-bottom">
                            <summary className='flex justify-center items-center text-semantic-textPrimary font-normal text-lg hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 rounded-3xl active:bg-primary-light'>
                                <span>Service</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 bg-primary-darker">
                                <li className={dropdownDesign}>Cardiology</li>
                                <li className={dropdownDesign}>Dentistry</li>
                                <li className={dropdownDesign}>Dermatology</li>
                                <li className={dropdownDesign}>Surgery</li>
                                <li className={dropdownDesign}>Oncology</li>
                                <li className={dropdownDesign}>Vaccination</li>
                                <li className={dropdownDesign}>Neurology</li>
                                <li className={dropdownDesign}>Acupuncture</li>
                                <li className={dropdownDesign}>Ophthalmology</li>
                            </ul>
                        </details>
                    </div>
                    <li
                        className={regularheader}>
                        <Link to='/about'>
                            About Us
                        </Link>
                    </li>
                    {authUser ?
                        (<details className="dropdown dropdown-bottom" >
                            <summary className=' flex justify-center items-center gap-2 text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light' >
                                <span className="material-symbols-outlined w-8 h-8 p-2 rounded-full bg-primary-light text-white flex justify-center items-center text-xl font-thin">person</span>
                                <span> {authUser.firstName}</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 bg-primary-darker">
                                <li className={dropdownDesign} >
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className={dropdownDesign} >
                                    <Link to="/profile">
                                        My Pets
                                    </Link>

                                </li>
                                <li className={dropdownDesign} >
                                    <Link to="/profile">
                                        My Appointment
                                    </Link>
                                </li>
                                <li className={dropdownDesign} onClick={logout}>
                                    Log out
                                </li>

                            </ul>
                        </details>
                        )
                        :
                        (<li
                            className='text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light' >
                            <Link to='/login'>
                                Log in
                            </Link>
                        </li>)}
                    <li className='flex justify-center items-center gap-2 text-white bg-secondary-main py-2.5 px-5 rounded-3xl font-normal text-lg hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'>
                        <Link to='/booking'>
                            Booking
                        </Link>
                        <span className="material-symbols-outlined font-normal text-sm">arrow_forward_ios</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}
