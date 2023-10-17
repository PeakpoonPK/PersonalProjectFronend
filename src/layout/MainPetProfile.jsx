import PetsForm from '../feature/pets/PetsForm';

export default function MainPetProfile() {
    return (
        <div className='flex flex-col w-[75%] lg:pt-24 pt-32 h-screen absolute right-0  gap-8 bg-slate-50' >
            <div className='flex sm:text-xl lg:text-2xl text-3xl justify-center text-semantic-textPrimary'>My pets</div>
            <div className='flex justify-end pr-56'>
                <button className="flex  text-xl text-primary-darker border-2 py-2 px-4 border-primary-darker rounded-xl hover:cursor-pointer hover:bg-primary-lightest active:bg-primary-light ">Add</button>
            </div>
            <div>
                <PetsForm />
            </div>
        </div>
    )
}
