import logo from '../assets/logoBrand.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/use_auth';
import HeaderItem from './HeaderItem';
import HeaderDropdownItem from './HeaderDropdownItem';

export default function Header() {

    const { logout, authUser } = useAuth();

    const manuBar = [
        { id: 1, to: '/', title: 'Home' },
        { id: 2, to: '/today', title: "Today's Available" },
        { id: 3, to: '/about', title: "About Us" },
    ]

    const manuServiceBar = [
        { id: 1, to: '', title: 'Cardiology' },
        { id: 2, to: '', title: 'Dentistry' },
        { id: 3, to: '', title: 'Dermatology' },
        { id: 4, to: '', title: 'Surgery' },
        { id: 5, to: '', title: 'Oncology' },
        { id: 6, to: '', title: 'Vaccination' },
        { id: 7, to: '', title: 'Neurology' },
        { id: 8, to: '', title: 'Acupuncture' },
        { id: 9, to: '', title: 'Ophthalmology' }
    ]
    let manuProfileBar = []
    if (authUser) {
        manuProfileBar = [
            { id: 1, to: `/profile/${authUser.id}`, title: 'Profile' },
            { id: 2, to: `/pets/${authUser.id}`, title: 'My Pets' },
            { id: 3, to: "/appointment", title: 'My Appointment' },
            { id: 4, to: "/", title: 'Log out', onClick: logout }
        ]
    }

    return (
        <header
            className='bg-slate-50 h-24 lg:h-16 items-center flex justify-between fixed top-0 left-0 right-0 z-10 
            lg:w-screen sm:w-screen'>
            <div className='flex gap-4 items-center px-16 sm:px-2 sm:gap-2 lg:px-2'>
                <img src={logo} alt='logo' className='w-16 ' />
                <h1 className='text-semantic-textPrimary font-semibold text-2xl lg:text-sm '>Animal Hospital</h1>
            </div>

            <div >
                <ul className='flex gap-2 px-16 items-center lg:px-2 '>
                    <div>
                        <ul className='flex justify-center items-center' >
                            {manuBar.map(el => (
                                <HeaderItem key={el.id} to={el.to} title={el.title} />
                            ))}
                            <li>
                                <details className="dropdown dropdown-bottom">
                                    <summary className='flex justify-center items-center text-semantic-textPrimary font-normal text-lg hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 rounded-3xl active:bg-primary-light lg:text-sm lg:px-1'>
                                        <span className='sm:text-white'>Service</span>
                                        <span className="material-symbols-outlined lg:text-sm">keyboard_arrow_down</span>
                                    </summary>
                                    <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow rounded-box  bg-primary-darker">
                                        {manuServiceBar.map(service => (
                                            <HeaderDropdownItem key={service.id} to={service.to} title={service.title} />
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {
                        authUser ?
                            (<details className="dropdown dropdown-bottom " >
                                <summary className=' flex justify-center items-center gap-2  font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light lg:text-sm lg:py-1 lg:px-2 ' >
                                    {authUser.profileImage ? (
                                        <div className='w-[40px] h-[40px] overflow-hidden rounded-full shadow-md  '>
                                            <img src={authUser.profileImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>
                                        </div>) :
                                        (<div>
                                            <span className="material-symbols-outlined w-6 h-6 p-2 rounded-full bg-primary-light text-white flex justify-center items-center text-base font-thin">
                                                person
                                            </span>
                                        </div>)}
                                    <span> {authUser.firstName}</span>
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                </summary>
                                <ul tabIndex={0} className="absolute mt-4 dropdown-content z-[1] menu p-2 shadow rounded-box w-56 lg:w-56 bg-primary-darker">
                                    {manuProfileBar.map(profile => (
                                        <HeaderDropdownItem key={profile.id} to={profile.to} title={profile.title} onClick={profile.onClick} />
                                    ))}
                                </ul>
                            </details>
                            )
                            :
                            (<li
                                className='text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light lg:text-sm lg:px-2 lg:py-1.5' >
                                <Link to='/login'>
                                    Log in
                                </Link>
                            </li>)
                    }
                    <li className='flex justify-center items-center gap-2 text-white bg-secondary-main py-2.5 px-5 rounded-3xl font-normal text-lg hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker lg:text-sm lg:px-3 lg:py-2 sm:hidden'>
                        <Link to='/booking'>
                            Booking
                        </Link>
                        <span className="material-symbols-outlined font-normal text-sm">arrow_forward_ios</span>
                    </li>
                </ul >
            </div >
        </header >
    )
}
