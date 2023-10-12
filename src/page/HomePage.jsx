import { Link } from 'react-router-dom'
import homeImage from '../assets/HomePage.avif'

export default function HomePage() {
    const wordDesign = 'text-semantic-textPrimary font-semibold text-5xl';
    return (
        <div className='flex flex-col static m-auto justify-center items-center  h-screen w-screen -z-10 '>
            <div className='flex relative left-[300px] top-[120px] justify-center'>
                <div className='flex flex-col bg-semantic-lightCream w-[640px] pb-[160px] ' >
                    <div className='flex flex-col pl-36 pt-28 gap-4'>
                        <p className={wordDesign}>Friendly,</p>
                        <p className={wordDesign}>Compassionate</p>
                        <p className='text-semantic-textSecondary font-semibold text-5xl'>Primary & Urgent</p>
                        <p className={wordDesign}>Care For Pets</p>
                    </div>
                    <div className='flex gap-4 justify-center pt-16'>
                        <button className='text-white font-normal text-lg  bg-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker' >
                            <Link to='/booking'>
                                Book a visit
                            </Link>
                        </button>
                        <button className='text-semantic-textSecondary font-normal text-lg  bg-slate-50 border-2 border-secondary-main py-2 px-6 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light' >
                            <Link to='/about'>
                                Contact Us
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex absolute inset-0 right-[520px] justify-center items-center'>
                <img src={homeImage} alt='homePageImage' className='h-[480px]' />
            </div>
        </div >
    )
}
