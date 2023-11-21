import { useAuth } from "../../hooks/use_auth";
import { Navigate } from 'react-router-dom';

export default function RedirectIfUser({ children }) {
    const { authUser } = useAuth();
    if (authUser?.isAdmin === true) {
        return <Navigate to='/' />
    }
    return children;
}