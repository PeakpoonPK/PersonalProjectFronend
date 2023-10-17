import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use_auth';


export default function MainProfile() {
    const { authUser } = useAuth();

    return (
        <div className='w-[75%] bg-slate-50 lg:pt-24 pt-32 h-screen absolute right-0 justify-center items-center '>
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-semantic-textPrimary'>
                Profile
            </div>
            <form
                className='flex flex-col gap-8 mt-6 border-4 sm:border-2 rounded-3xl border-primary-darker justify-center lg:w-[560px] sm:w-[240px] w-[600px] m-auto relative pb-24'>
                <div className='flex sm:pt-4 pt-8'>
                    {authUser.profileImage ? (
                        <div className='pl-[200px]'>
                            <div className='w-[200px] h-[200px] overflow-hidden rounded-full shadow-md '>
                                <img src={authUser.profileImage} alt='profileImage' className='object-cover h-full aspect-square' ></img>
                            </div>
                        </div>
                    ) : (

                        <div className='flex m-auto sm:h-24 sm:w-24 rounded-full h-36 w-36 justify-center bg-primary-light'>
                            <span className="material-symbols-outlined  flex m-auto sm:h-24 sm:w-24 rounded-full h-36 w-36 justify-center bg-primary-light text-white items-center sm:text-[60px] text-[80px] font-extralight">person</span>
                        </div>
                    )
                    }
                </div>
                <div className='flex flex-col gap-4 sm:pl-4 lg:pl-10 pl-10 sm:text-sm lg:text-lg text-xl'>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>First name</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.firstName || '-'}</span>
                    </div>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>Last name</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.lastName || '-'}</span>
                    </div>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>Mobile No.1</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.mobile_1 || '-'}</span>
                    </div>

                    <div className='flex sm:flex-col gap-2 '>
                        <label className='font-semibold text-semantic-textPrimary'>Mobile No.2</label>
                        <span className='flex justify-center border-b-2 bottom-0 border-primary-darker w-[70%] m-auto text-black mr-6'>{authUser.mobile_2 || '-'}</span>
                    </div>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>E-mail</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.email || '-'}</span>
                    </div>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>Line ID</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.lineId || '-'}</span>
                    </div>
                    <div className='flex sm:flex-col gap-2'>
                        <label className='font-semibold text-semantic-textPrimary'>Address</label>
                        <span className='flex border-b-2 border-primary-darker w-[70%] m-auto justify-center text-black mr-6'>{authUser.address || '-'}</span>
                    </div>
                </div>
                <button className='flex justify-cente absolute bottom-4 right-4 font-normal bg-primary-darker rounded-2xl text-white py-2 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                    <Link to={`/profile/${authUser.id}/editProfile`}>Edit Profile</Link>
                </button>
            </form>
        </div>



    )
}
