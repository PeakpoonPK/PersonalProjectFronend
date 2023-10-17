import { Link } from 'react-router-dom'
import registerImage from '../assets/RegisterPage.avif'
import Joi from 'joi';
import { useState } from 'react';
import InputErrorMessage from '../feature/auth/InputErrorMessage';
import { useAuth } from '../hooks/use_auth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const registerPrismaSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().email({ tlds: false }).required().strip(),
    mobile_1: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits long and contain only numbers.'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).trim().required().messages({
        'string.pattern.base': 'Password must be between 8 and 30 characters and contain only letters and numbers.'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
})

const validateRegister = input => {

    const { error } = registerPrismaSchema.validate(input, { abortEarly: false });
    console.log(error);
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}


export default function RegisterPage() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        mobile_1: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { register } = useAuth();
    const Navigate = useNavigate()
    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input)
        Navigate('/')
    };

    return (
        <div className="mlg:grid mlg:grid-cols-7 py-44 sm:py-24">
            <div className='col-span-3 flex flex-col justify-center items-center gap-6'>
                <h1 className='text-4xl font-semibold text-semantic-textPrimary lg:text-3xl'>Register</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col relative'>
                        <form
                            onSubmit={handleSubmitForm}
                            className='flex flex-col gap-8 pt-10 pb-16 px-6 border-4 rounded-3xl border-primary-darker static lg:w-[320px]'>
                            <div className='flex flex-col'>
                                <input
                                    type='text'
                                    placeholder='Firstname'
                                    value={input.firstName}
                                    name='firstName'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.firstName ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.firstName} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='text'
                                    placeholder='Lastname'
                                    value={input.lastName}
                                    name='lastName'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.lastName ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.lastName} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='text'
                                    placeholder='mobile'
                                    value={input.mobile_1}
                                    name='mobile_1'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.mobile_1 ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.mobile_1} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={input.email}
                                    name='email'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.email ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.email} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={input.password}
                                    name='password'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.password ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.password} />}
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={input.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleChangeInput}
                                    className={`outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96 lg:w-64 ${error.confirmPassword ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}></input>
                                {error && <InputErrorMessage message={error.confirmPassword} />}
                            </div>
                            <button className='flex absolute justify-center bottom-[-20px] left-[150px] lg:left-[80px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-span-4 items-center flex justify-center sm:hidden '>
                <img src={registerImage} alt='logInImage' />
            </div>
        </div>
    )
}
