import { Link } from 'react-router-dom'
import homeImage from '../assets/HomePage.avif'

export default function HomePage() {
    const wordDesign = 'text-semantic-textPrimary font-semibold text-5xl sm:text-3xl lg:text-4xl';
    return (
        <div className='flex flex-col static m-auto justify-center items-center  h-screen w-screen -z-10 '>


            <div >
                <div className='flex relative left-[300px] top-[120px] justify-center lg:left-[160px] lg:top-[40px]'>
                    <div className='flex flex-col bg-semantic-lightCream w-[640px] pb-[160px] lg:w-[450px] lg:pb-[100px] ' >
                        <div className='flex flex-col pl-36 pt-28 gap-4 lg:gap-2 '>
                            <p className={wordDesign}>Friendly,</p>
                            <p className={wordDesign}>Compassionate</p>
                            <p className='text-semantic-textSecondary font-semibold text-5xl sm:text-3xl lg:text-4xl'>Primary & Urgent</p>
                            <p className={wordDesign}>Care For Pets</p>
                        </div>
                        <div className='flex gap-4 justify-center pt-16'>
                            <button className=' flex justify-center items-center gap-2 text-white font-normal text-lg  bg-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker' >
                                <Link to='/booking'>
                                    Book a visit
                                </Link>
                                <span className="material-symbols-outlined font-normal text-sm">arrow_forward_ios</span>
                            </button>
                            <button className='text-semantic-textSecondary font-normal text-lg  bg-slate-50 border-2 border-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light' >
                                <Link to='/about'>
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex absolute inset-0 right-[520px] justify-center items-center lg:right-[360px] lg:bottom-[300px]'>
                    <img src={homeImage} alt='homePageImage' className='h-[480px] lg:h-[280px] ' />
                </div>
            </div>
        </div>


    )
}
