export default function ProfilePage() {
    return (
        <div className="grid grid-cols-7 py-16">
            <div className='col-span-3 flex flex-col justify-center items-center gap-10'>
                <h1 className='text-4xl font-semibold text-semantic-textPrimary'>Log in</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col relative'>
                        <div className='flex flex-col gap-8 pt-10 pb-16 px-6 border-4 rounded-3xl border-primary-darker'>
                            <input type='email' placeholder='Email' className='outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96'></input>
                            <input type='password' placeholder='Password' className='outline-none bg-slate-50 text-xl font-normal text-black border-b-2 border-primary-darker w-96'></input>
                            <button className='flex absolute top-[170px] left-[150px] text-xl font-normal bg-primary-darker rounded-2xl text-white py-3 px-10 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Sign In</button>
                        </div>
                    </div>
                    <div className='flex pt-12 justify-center'>
                        <p className='text-semantic-textPrimary text-lg font-normal'>OR</p>
                    </div>
                    <div className='flex pt-2 justify-center'>
                        <button className='flex text-xl font-normal border-2 border-secondary-main  bg-slate-50 rounded-2xl text-semantic-textSecondary py-2 px-8 '><Link to='/register'>Sign Up</Link></button>
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <img src={loginImage} alt='logInImage' />
            </div>
        </div>
    )
}
