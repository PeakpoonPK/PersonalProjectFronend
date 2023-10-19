import ProfileForm from '../feature/user/ProfileForm';


export default function MainProfile() {

    return (
        <div className='w-[75%] bg-slate-50 lg:pt-24 pt-32 h-screen absolute right-0 justify-center items-center '>
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-semantic-textPrimary'>
                Profile
            </div>
            <ProfileForm />
        </div>



    )
}
