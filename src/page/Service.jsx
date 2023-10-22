import dogDance from '../assets/dogdance.gif'

export default function Service() {
    return (
        <div className=" flex justify-center items-center h-screen flex-col gap-0 bg-transparent">
            <img src={dogDance} alt='Dog run' className='w-36'></img>
            <div className=' flex  gap-2'>
                <span className='text-semantic-textPrimary text-3xl '>Coming soon</span>
                <span className="loading loading-dots loading-5xl text-secondary-main"></span>
            </div>
        </div>
    )
}

