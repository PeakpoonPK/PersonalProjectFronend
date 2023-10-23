import AuthConfirm from '../feature/booking/AuthConfirm';

import { useAuth } from '../hooks/use_auth'


export default function ConfirmBookingAuth() {

    return (
        <div className="flex flex-col bg-semantic-lightCream h-screen pt-24">
            <div className="flex text-4xl font-semibold gap-2 justify-center mx-auto pt-16">
                <span className="text-primary-darker">Confirm Your Booking </span>
            </div>
            <div >
                <AuthConfirm />
            </div>
        </div>
    )
}
