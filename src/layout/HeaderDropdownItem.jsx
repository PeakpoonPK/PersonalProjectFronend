
import { Link } from 'react-router-dom'



const dropdownDesign = 'text-white font-normal text-lg hover:cursor-pointer hover:bg-primary-dark px-4 py-2 active:bg-primary-darker active:text-white hover:text-white ';

export default function HeaderDropdownItem({ to, title, onClick }) {
    return (
        <li className={dropdownDesign} onClick={onClick}><Link to={to}>{title}</Link></li>
    )
}
