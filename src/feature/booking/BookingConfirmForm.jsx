

export default function BookingConfirmForm({ title, data }) {
    return (
        <div>
            <div className='flex gap-4'>
                <label className='text-xl font-thin text-primary-darker'>{title}</label>
                <span className='flex border-b-2 border-primary-darker w-[280px] m-auto justify-center text-black mr-6'>{data}</span>
            </div>
        </div>
    )
}
