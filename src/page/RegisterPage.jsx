import { Link } from 'react-router-dom'
import registerImage from '../assets/RegisterPage.avif'
import Joi from 'joi';
import { useState } from 'react';

// const registerPrismaSchema = Joi.object({
//     firstName: Joi.string().trim().required(),
//     lastName: Joi.string().trim().required(),
//     email: Joi.string().email().required(),
//     mobile_1: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
//         'string.pattern.base': 'Mobile number must be exactly 10 digits long and contain only numbers.'
//     }),
//     password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).trim().required().messages({
//         'string.pattern.base': 'Password must be between 8 and 30 characters and contain only letters and numbers.'
//     }),
//     confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
// })

// const validateRegister = input => {
//     const { error } = registerPrismaSchema.validate(input, { abortEarly: false });
//     console.log(error);
//     if (error) {
//         const result = error.details.reduce((acc, el) => {
//             const { messages, path } = el
//             acc[path[0]] = message;
//             return acc;
//         }, {});
//         return result;
//     }
// }


export default function RegisterPage() {
    // const [input, setInput] = useState({
    //     firstName: '',
    //     lastName: '',
    //     mobile_1: '',
    //     email: '',
    //     password: '',
    //     confirm: ''
    // })

    // const [error, setError] = useState({});
    // const { register } = useAuth();

    // const handleChangeInpu

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
                            <button className='flex fixed top-[760px] left-[320px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Sign Up</button>
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
