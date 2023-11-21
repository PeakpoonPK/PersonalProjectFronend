import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use_auth';
import { useState, useEffect, useRef } from 'react';
import Joi from 'joi'
import Loading from '../components/Loading'
import EditInputForm from '../feature/user/EditInputForm';
import InputErrorMessage from '../feature/auth/InputErrorMessage';

const EditProfilePrismaSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    mobile_1: Joi.string().pattern(/^[0-9]{10}$/).required().allow(null, '').messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits long and contain only numbers.'
    }),
    mobile_2: Joi.string().pattern(/^[0-9]{10}$/).required().allow(null, '-').messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits long and contain only numbers.'
    }),
    lineId: Joi.string().trim().allow(null, '-'),
    address: Joi.string().trim().allow(null, '-'),
})

const validateEditProfile = input => {
    const { error } = EditProfilePrismaSchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}

export default function EditProfile({ children, title, initialSrc }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputEl = useRef(null);
    const { authUser } = useAuth();


    useEffect(() => {
        setInput({ ...authUser })
    }, [])

    const [error, setError] = useState({})
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        mobile_1: '',
        mobile_2: '',
        lineId: '',
        address: '',
        profileImage: ''
    })
    const { editProfile } = useAuth();
    const Navigate = useNavigate()

    const editProfileInput = [
        { id: 1, title: 'FirstName', placeholder: `${authUser.firstName || '-'}`, value: `${input.firstName}`, name: 'firstName', errorInput: error.firstName || null },
        { id: 2, title: 'Last name', placeholder: `${authUser.lastName || '-'}`, value: `${input.lastName}`, name: 'lastName', errorInput: error.lastName || null },
        { id: 3, title: 'Mobile No.1', placeholder: `${authUser.mobile_1 || '-'}`, value: `${input.mobile_1}`, name: 'mobile_1', errorInput: error.mobile_1 || null },
        { id: 4, title: 'Mobile No.2', placeholder: `${authUser.mobile_2 || '-'}`, value: `${input?.mobile_2}`, name: 'mobile_2', errorInput: error.mobile_2 || null },
        { id: 5, title: 'Line ID', placeholder: `${authUser.lineId || '-'}`, value: `${input?.lineId}`, name: 'lineId', errorInput: error.lineId || null },
        { id: 6, title: 'Address', placeholder: `${authUser.address || '-'}`, value: `${input?.address}`, name: 'address', errorInput: error.address || null },
    ]

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const handleSubmitForm = async (e) => {
        try {
            const inputCheck = { ...input }
            delete inputCheck.id
            delete inputCheck.email
            delete inputCheck.profileImage
            delete inputCheck.password
            delete inputCheck.isAdmin
            delete inputCheck.Pets

            e.preventDefault();
            const validationError = validateEditProfile(inputCheck);

            if (validationError) {
                console.log(validationError)
                return setError(validationError);
            }
            console.log(file)

            const formData = new FormData();
            if (file) {
                formData.append('profileImage', file)
            }

            formData.append('userData', JSON.stringify(inputCheck))
            console.log(formData.get('userData'))
            setError({});
            setLoading(true)
            await editProfile(formData)
            Navigate(`/profile/${authUser.id}`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='w-[75%] bg-slate-50 lg:pt-24 pt-32 h-screen absolute right-0 justify-center items-center '>
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-secondary-darker'>
                Edit Profile
            </div>
            <form
                onSubmit={handleSubmitForm}
                className='flex flex-col gap-8 mt-6 border-4 sm:border-2 rounded-3xl border-secondary-darker justify-center lg:w-[560px] sm:w-[240px] w-[600px] h-[720px] m-auto relative pb-24 '>
                {loading ? <Loading /> :
                    <>
                        <div className='flex sm:pt-4 pt-8'>
                            <input
                                type="file"
                                className="hidden"
                                ref={inputEl}
                                onChange={e => {
                                    if (e.target.files[0]) {
                                        setFile(e.target.files[0])
                                    }
                                }}
                            />
                            <div className="flex justify-center items-center">
                                {authUser.profileImage ? (
                                    <div className='pl-[200px]'>
                                        <div
                                            onClick={() => { inputEl.current.click() }}
                                            className="w-[200px] h-[200px] overflow-hidden rounded-full shadow-md">
                                            {file ? <img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' /> :
                                                <img src={authUser.profileImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>}
                                        </div>
                                    </div>
                                ) :
                                    (<div className='pl-[220px]'>
                                        <div onClick={() => { inputEl.current.click() }}
                                            className='w-[200px] h-[200px] overflow-hidden rounded-full shadow-md'>
                                            {file ? (<img src={URL.createObjectURL(file)} alt="post" className='object-cover h-full aspect-square' />) :
                                                (<span className="material-symbols-outlined w-[200px] h-[200px] flex m-auto sm:h-24 sm:w-24 rounded-full  justify-center bg-primary-light text-white items-center sm:text-[60px] text-[80px] font-extralight">person</span>)}
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 sm:pl-4 lg:pl-10 pl-10 sm:text-sm lg:text-lg text-xl'>
                            {editProfileInput.map(el => (
                                <EditInputForm key={el.id} title={el.title} placeholder={el.placeholder} value={el.value} name={el.name} onChange={handleChangeInput} errorInput={el.errorInput} />

                            ))}
                        </div>
                        <button
                            className='flex justify-cente absolute bottom-4 right-4 font-normal bg-primary-darker rounded-2xl text-white py-2 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                            Update Profile
                        </button></>}
            </form >
        </div >



    )
}
