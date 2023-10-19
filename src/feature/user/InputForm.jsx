
export default function InputForm({ title, data }) {
    return (
        <div>
            <div className='flex sm:flex-col gap-2'>
                <label className='font-semibold text-semantic-textPrimary'>{title}</label>
                <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{data}</span>
            </div>
        </div>
    )
}
