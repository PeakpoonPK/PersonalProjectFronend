import { Link } from 'react-router-dom'
const regularheader = 'text-semantic-textPrimary font-normal text-lg px-4 py-2 rounded-3xl hover:cursor-pointer hover:bg-primary-lightest active:bg-primary-light lg:text-sm lg:px-1 lg:py-1';

export default function HeaderItem({ to, title }) {
    return (
        <li
            className={regularheader}>
            <Link to={to} className='sm:text-white'>
                {title}
            </Link>
        </li>
    )
}