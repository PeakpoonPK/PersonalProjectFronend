import AppointmentHeader from '../feature/Appointment/AppointmentHeader'
import AppointmentTable from '../feature/Appointment/AppointmentTable'

export default function MainAllApointment() {
    return (
        <div className='flex flex-col w-[75%] lg:pt-24 pt-32  absolute right-0 gap-8 bg-slate-50 h-' >
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-semantic-textPrimary'>All Appointment</div>
            <div className='h-full bg-slate-50 pb-10 m-auto items-center'>
                <AppointmentHeader />
            </div>
            <div className='h-full bg-slate-50 pb-10 m-auto items-center'>
                <AppointmentTable />
            </div>
        </div>
    )
}
