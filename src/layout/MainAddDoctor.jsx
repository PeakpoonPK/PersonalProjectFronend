import AddDoctorForm from '../feature/Doctor/AddDoctorForm'

export default function MainAddDoctor() {
    return (
        <div className='flex flex-col w-[75%] lg:pt-24 pt-32 h-screen absolute right-0  gap-8 bg-slate-50' >
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-secondary-darker'>Add Doctor</div>
            <div className='flex justify-end pr-56'>
            </div>
            <div className="bg-slate-50 h-screen">
                <AddDoctorForm />
            </div>
        </div>
    )
}
