import { Link, useNavigate } from 'react-router-dom'
import loginImage from '../assets/loginPage.avif'
import { useState } from 'react'
import { useAuth } from '../hooks/use_auth'
import Joi from 'joi'
import InputErrorMessage from '../feature/auth/InputErrorMessage'

const LoginPrismaSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(8).trim().required()
})

const validateLogin = input => {
    const { error } = LoginPrismaSchema.validate(input, { abortEarly: false });

    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;

        }, {});
        return result;
    }
}

export default function LogInPage() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({})
    const { login } = useAuth();
    const Navigate = useNavigate()

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const validateError = validateLogin(input)
            if (validateError) {
                return setError(validateError)
            }
            setError({})

            const error = await login(input)

            if (error === "Sorry, we could not find your account.") {
                return setError({ email: error })
            } else if (error === "Wrong Password!") { return setError({ password: error }) }
            Navigate('/')
        } catch (error) {
            console.log(error)
        }


        // if (error) {
        //     console.log(error)
        //     return e.preventDefault();
        // }

    }

    return (
        <div className="mlg:grid mlg:grid-cols-7 mlg:pt-48 pt-36">
            <div className='col-span-3 flex flex-col justify-center items-center gap-10 lg:gap-6'>
                <h1 className='text-4xl font-semibold text-semantic-textPrimary lg:text-3xl'>Log in</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col relative'>
                        <form
                            onSubmit={handleSubmitForm}
                            className='flex flex-col gap-8 pt-10 pb-16 px-6 border-4 rounded-3xl border-primary-darker lg:pt-6 lg:w-[320px]'>
                            <div className='flex flex-col'>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    value={input.email}
                                    onChange={e => setInput({ ...input, email: e.target.value })}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.email ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}
                                />
                                {error && <InputErrorMessage message={error.email} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={input.password}
                                    onChange={e => setInput({ ...input, password: e.target.value })}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.password ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}
                                />
                                {error && <InputErrorMessage message={error.password} />}
                            </div>
                            <button className='flex absolute justify-center bottom-[-20px] left-[150px] lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Sign In</button>
                        </form>
                    </div>
                    <div className='flex pt-8 justify-center'>
                        <p className='text-semantic-textPrimary text-lg font-normal'>OR</p>
                    </div>
                    <div className='flex pt-2 justify-center'>
                        <button className='flex text-xl font-normal border-2 border-secondary-main  bg-slate-50 rounded-2xl text-semantic-textSecondary py-2 px-8 hover:cursor-pointer hover:bg-secondary-lightest active:bg-secondary-light'><Link to='/register'>Sign Up</Link></button>
                    </div>
                </div>
            </div>
            <div className='col-span-4 sm:hidden'>
                <img src={loginImage} alt='logInImage' />
            </div>
        </div>
    )
}
