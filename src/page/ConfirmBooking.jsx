import AuthConfirm from '../feature/booking/AuthConfirm';
import NonAuthConfirm from '../feature/booking/NonAuthConfirm';
import { useAuth } from '../hooks/use_auth'


export default function ConfirmBooking() {
    const { authUser } = useAuth();
    return (
        <div className="flex flex-col bg-semantic-lightCream h-screen pt-24">
            <div className="flex text-4xl font-semibold gap-2 justify-center mx-auto pt-16">
                <span className="text-primary-darker">Confirm Your Booking </span>
            </div>
            <div >
                {authUser ? (<AuthConfirm />) : (<NonAuthConfirm />)}
            </div>
        </div>
    )
}
