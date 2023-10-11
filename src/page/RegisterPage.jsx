import { Link } from 'react-router-dom'
import registerImage from '../assets/RegisterPage.avif'


export default function RegisterPage() {
    const inputDesign = 'outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96';
    return (
        <div className="grid grid-cols-7 py-16">
            <div className='col-span-3 flex flex-col justify-center items-center gap-10'>
                <h1 className='text-4xl font-semibold text-semantic-textPrimary'>Register</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col relative'>
                        <div className='flex flex-col gap-8 pt-10 pb-16 px-6 border-4 rounded-3xl border-primary-darker'>
                            <input type='text' placeholder='Firstname' className={inputDesign}></input>
                            <input type='text' placeholder='Lastname' className={inputDesign}></input>
                            <input type='text' placeholder='mobile' className={inputDesign}></input>
                            <input type='email' placeholder='Email' className={inputDesign}></input>
                            <input type='password' placeholder='Password' className={inputDesign}></input>
                            <input type='password' placeholder='Confirm Password' className={inputDesign}></input>
                            <button className='flex absolute top-[420px] left-[150px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <img src={registerImage} alt='logInImage' />
            </div>
        </div>
    )
}
