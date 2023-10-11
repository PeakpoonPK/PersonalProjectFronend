import { Link } from 'react-router-dom'
import loginImage from '../assets/loginPage.avif'
import { useState } from 'react'
import { useAuth } from '../hooks/use_auth'

export default function LogInPage() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleSubmitForm = e => {
        e.preventDefault();
        login(input)
    }
    const { login } = useAuth();
    return (
        <div className="grid grid-cols-7 pt-48">
            <div className='col-span-3 flex flex-col justify-center items-center gap-10'>
                <h1 className='text-4xl font-semibold text-semantic-textPrimary'>Log in</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col relative'>
                        <div
                            onSubmit={handleSubmitForm}
                            className='flex flex-col gap-8 pt-10 pb-16 px-6 border-4 rounded-3xl border-primary-darker'>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={input.email}
                                    onChange={e => setInput({ ...input, email: e.target.value })}
                                    className='outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96'
                                />
                            </div>
                            <div>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={input.password}
                                    onChange={e => setInput({ ...input, password: e.target.value })}
                                    className='outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96'
                                />
                            </div>
                            <button
                                className='flex absolute top-[170px] left-[150px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className='flex pt-12 justify-center'>
                        <p className='text-semantic-textPrimary text-lg font-normal'>OR</p>
                    </div>
                    <div className='flex pt-2 justify-center'>
                        <button className='flex text-xl font-normal border-2 border-secondary-main  bg-slate-50 rounded-2xl text-semantic-textSecondary py-2 px-8 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light'><Link to='/register'>Sign Up</Link></button>
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <img src={loginImage} alt='logInImage' />
            </div>
        </div>
    )
}
