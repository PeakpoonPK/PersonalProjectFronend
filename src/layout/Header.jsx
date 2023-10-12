import logo from '../assets/logoBrand.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/use_auth';

export default function Header() {
    const { logout, authUser } = useAuth();
    const regularheader = 'text-semantic-textPrimary font-normal text-lg px-4 py-2 rounded-3xl hover:cursor-pointer hover:bg-primary-lightest active:bg-primary-light lg:text-sm lg:px-1 lg:py-1';
    const dropdownDesign = 'text-white font-normal text-lg hover:cursor-pointer hover:bg-primary-dark px-4 py-2 active:bg-primary-darker';
    const Hidden = 'sm:hidden'
    const smallText = 'text-sm'
    const smRegularHeader = regularheader + ' ' + Hidden
    const smDropdrownDesign = dropdownDesign + ' ' + smallText

    return (
        <header
            className='bg-slate-50 h-16 items-center flex justify-between fixed top-0 left-0 right-0 z-10 
            lg:w-screen sm:w-screen'>
            <div className='flex gap-4 items-center px-16 sm:px-2 sm:gap-2 lg:px-2'>
                <img src={logo} alt='logo' className='w-16 ' />
                <h1 className='text-semantic-textPrimary font-semibold text-2xl lg:text-sm '>Animal Hospital</h1>
            </div>

            <div className='mlg:hidden'>
                <ul className='flex gap-2 px-2 items-center'>
                    <details className="dropdown dropdown-bottom dropdown-end ">
                        <summary className="m-1 btn text-semantic-textPrimary font-normal text-sm hover:cursor-pointer hover:bg-primary-lightest px-1 py-2 rounded-xl active:bg-primary-light ">
                            <span className="material-symbols-outlined">menu</span>
                        </summary>
                        <ul tabIndex={0} className="absolute dropdown-content z-[1] menu p-2 shadow rounded-box w-48 bg-slate-50">
                            <li
                                className={regularheader}>
                                <Link to='/' >
                                    Home
                                </Link>
                            </li>
                            <li
                                className={regularheader}>
                                <Link to='/today' >
                                    Today's Available
                                </Link>
                            </li>
                            <li className={regularheader}>
                                <details className="dropdown dropdown-bottom">
                                    <summary className='flex items-center gap-16 justify-start text-semantic-textPrimary font-normal hover:cursor-pointer hover:bg-primary-lightest px-1 rounded-3xl active:bg-primary-light  '>
                                        <span className='px-2.5'>Service</span>
                                    </summary>
                                    <ul tabIndex={0} className=" mt-4 dropdown-content z-[1] menu  shadow rounded-box w-44 bg-primary-darker ">
                                        <li className={smDropdrownDesign}>Cardiology</li>
                                        <li className={smDropdrownDesign}>Dentistry</li>
                                        <li className={smDropdrownDesign}>Dermatology</li>
                                        <li className={smDropdrownDesign}>Surgery</li>
                                        <li className={smDropdrownDesign}>Oncology</li>
                                        <li className={smDropdrownDesign}>Vaccination</li>
                                        <li className={smDropdrownDesign}>Neurology</li>
                                        <li className={smDropdrownDesign}>Acupuncture</li>
                                        <li className={smDropdrownDesign}>Ophthalmology</li>
                                    </ul>
                                </details>
                            </li>
                            <li
                                className={regularheader}>
                                <Link to='/about' >
                                    About Us
                                </Link>
                            </li >
                        </ul>
                    </details>
                    {authUser ?
                        (<details className="dropdown dropdown-bottom dropdown-end" >
                            <summary className=' flex justify-center items-center gap-2 text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-2 py-1 active:bg-primary-light ' >
                                <span className="material-symbols-outlined w-6 h-6 p-2 rounded-full bg-primary-light text-white flex justify-center items-center text-base font-thin">person</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <ul tabIndex={0} className="mt-4 dropdown-content z-[1] menu p-2 shadow rounded-box w-48 bg-primary-darker">
                                <li className={smDropdrownDesign} >
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className={smDropdrownDesign} >
                                    <Link to="/profile">
                                        My Pets
                                    </Link>

                                </li>
                                <li className={smDropdrownDesign} >
                                    <Link to="/profile">
                                        My Appointment
                                    </Link>
                                </li>
                                <li className={smDropdrownDesign} onClick={logout}>
                                    <Link to='/'>
                                        Log out
                                    </Link>
                                </li>

                            </ul>
                        </details>
                        )
                        :
                        (<li
                            className='text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light lg:text-sm lg:px-2 lg:py-1.5' >
                            <Link to='/login'>
                                Log in
                            </Link>
                        </li>)}
                    <li className='flex justify-center items-center gap-2 text-white bg-secondary-main py-2.5 px-5 rounded-3xl font-normal text-lg hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker lg:text-sm lg:px-3 lg:py-2 sm:hidden'>
                        <Link to='/booking'>
                            Booking
                        </Link>
                        <span className="material-symbols-outlined font-normal text-sm">arrow_forward_ios</span>
                    </li>
                </ul>
            </div >


            <div className='sm:hidden'>
                <ul className='flex gap-2 px-16 items-center lg:px-2'>
                    <div>
                        <ul className='flex justify-center items-center' >
                            <li
                                className={smRegularHeader}>
                                <Link to='/' className='sm:text-white'>
                                    Home
                                </Link>
                            </li>
                            <li
                                className={smRegularHeader}>
                                <Link to='/today' className='sm:text-white'>
                                    Today's Available
                                </Link>
                            </li>
                            <li className={smRegularHeader}>
                                <details className="dropdown dropdown-bottom">
                                    <summary className='flex justify-center items-center text-semantic-textPrimary font-normal text-lg hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 rounded-3xl active:bg-primary-light lg:text-sm lg:px-1'>
                                        <span className='sm:text-white'>Service</span>

                                    </summary>
                                    <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow rounded-box w-48 bg-primary-darker">
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
                            </li>
                            <li
                                className={smRegularHeader}>
                                <Link to='/about' className='sm:text-white'>
                                    About Us
                                </Link>
                            </li >
                        </ul>
                    </div>
                    {authUser ?
                        (<details className="dropdown dropdown-bottom" >
                            <summary className=' flex justify-center items-center gap-2 text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light ' >
                                <span className="material-symbols-outlined w-8 h-8 p-2 rounded-full bg-primary-light text-white flex justify-center items-center text-xl font-thin">person</span>
                                <span> {authUser.firstName}</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </summary>
                            <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow rounded-box w-48 bg-primary-darker">
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
                            className='text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light lg:text-sm lg:px-2 lg:py-1.5' >
                            <Link to='/login'>
                                Log in
                            </Link>
                        </li>)}
                    <li className='flex justify-center items-center gap-2 text-white bg-secondary-main py-2.5 px-5 rounded-3xl font-normal text-lg hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker lg:text-sm lg:px-3 lg:py-2 sm:hidden'>
                        <Link to='/booking'>
                            Booking
                        </Link>
                        <span className="material-symbols-outlined font-normal text-sm">arrow_forward_ios</span>
                    </li>
                </ul>
            </div >
        </header >
    )
}
