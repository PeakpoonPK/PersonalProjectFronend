import ChooseTimeInDateForm from "../feature/booking/ChooseTimeInDateForm";



export default function SearchBooking() {
    return (
        <div className="flex flex-col bg-semantic-lightCream h-screen pt-24">
            <div className="flex text-4xl font-semibold gap-2 justify-center mx-auto pt-16">
                <span className="text-primary-darker">Choose a </span>
                <span className="text-secondary-main">date, time</span>
                <span className="text-primary-darker"> and doctor</span>
            </div>
            <div >
                <ChooseTimeInDateForm />
            </div>
        </div>
    )
}
