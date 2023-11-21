import { useAuth } from '../../hooks/use_auth';
import { Link } from 'react-router-dom'
import InputForm from './InputForm';




export default function ProfileForm() {
    const { authUser } = useAuth();
    const dataInputProfile = [
        { id: 1, title: 'FirstName', data: `${authUser.firstName || '-'}` },
        { id: 2, title: 'Last name', data: `${authUser.lastName || '-'}` },
        { id: 3, title: 'Mobile No.1', data: `${authUser.mobile_1 || '-'}` },
        { id: 4, title: 'Mobile No.2', data: `${authUser.mobile_2 || '-'}` },
        { id: 5, title: 'E-mail', data: `${authUser.email || '-'} ` },
        { id: 6, title: 'Line ID', data: `${authUser.lineId || '-'}` },
        { id: 7, title: 'Address', data: `${authUser.address || '-'}` },
    ]
    return (
        <div>
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

                    {dataInputProfile.map(el =>
                        <InputForm key={el.id} title={el.title} data={el.data} />)}
                </div>
                <button className='flex justify-cente absolute bottom-4 right-4 font-normal bg-primary-darker rounded-2xl text-white py-2 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>
                    <Link to={`/profile/${authUser.id}/editProfile`}>Edit Profile</Link>
                </button>
            </form>
        </div>
    )
}
