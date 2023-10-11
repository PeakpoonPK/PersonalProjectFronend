import logo from '../assets/logoBrand.png'
import { Link } from 'react-router-dom'

export default function Header() {
    const regularheader = 'text-semantic-textPrimary font-normal text-lg hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 rounded-3xl active:bg-primary-light';
    return (
        <header className='bg-slate-50 h-24 items-center flex justify-between fixed top-0 left-0 right-0'>
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
                    <li
                        className={regularheader}>
                        <Link to='/service'>
                            Service
                        </Link>
                    </li>
                    <li
                        className={regularheader}>
                        <Link to='/about'>
                            About Us
                        </Link>
                    </li>
                    <li
                        className='text-semantic-textPrimary font-normal text-lg rounded-3xl border-2 border-primary-darker hover:cursor-pointer hover:bg-primary-lightest px-4 py-2 active:bg-primary-light' >
                        <Link to='/login'>
                            Log in
                        </Link>
                    </li>
                    <li className='text-white bg-secondary-main py-2.5 px-5 rounded-3xl font-normal text-lg hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'>
                        <Link to='/booking'>
                            Booking
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
