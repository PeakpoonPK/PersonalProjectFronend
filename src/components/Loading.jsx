import dogRun from '../assets/giphy.gif'

export default function Loading() {
    return (
        <div className=" flex justify-center items-center h-screen flex-col gap-0 bg-transparent">
            <img src={dogRun} alt='Dog run' className='w-36'></img>
            <div className=' flex  gap-2'>
                <span className='text-semantic-textPrimary '>Loading</span>
                <span className="loading loading-dots loading-xs text-secondary-main"></span>
            </div>

        </div>
    )
}
