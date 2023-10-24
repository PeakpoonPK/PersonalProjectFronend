import { useAuth } from "../../hooks/use_auth";
import { Navigate } from 'react-router-dom';

export default function RedirectIfAdmin({ children }) {
    const { authUser } = useAuth();
    if (authUser.isAdmin === false) {
        return <Navigate to='/' />
    }
    return children;
}