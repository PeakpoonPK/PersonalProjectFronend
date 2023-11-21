import NonAuthConfirm from '../feature/booking/NonAuthConfirm'


export default function ConfirmBookingNonAuth() {
    return (
        <div className="flex flex-col bg-semantic-lightCream h-screen pt-24">
            <div className="flex text-4xl font-semibold gap-2 justify-center mx-auto pt-16">
                <span className="text-primary-darker">Confirm Your Booking </span>
            </div>
            <div >
                <NonAuthConfirm />
            </div>
        </div>
    )
}
