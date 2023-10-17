import defaultImage from '../../assets/dog_1.avif'


export default function PetsBox() {
    return (
        <div className='flex flex-col gap-8 mt-6 border-2 sm:border-2 rounded-3xl border-primary-darker justify-center lg:w-[560px] sm:w-[240px] w-[800px] m-auto relative '>
            <div className='p-4 flex'>
                <div className='w-[160px] h-[160px] overflow-hidden rounded-full shadow-md' >
                    <img src={defaultImage} alt="pet" className='object-cover h-full aspect-square' />
                </div>
                <div className='pl-10 grid grid-rows-4 grid-flow-col'>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Name</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Sex</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Allery</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Other</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Breed</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-base font-thin text-primary-darker'>Age</label>
                        <span className='flex border-b-2 border-primary-darker w-[180px] m-auto justify-center text-black mr-6'>- </span>
                    </div>
                    <div className='flex flex-col row-span-2 relative text-sm'>
                        <button className='flex justify-cente absolute bottom-10 right-4 font-normal bg-secondary-main rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'>Edit</button>
                        <button className='flex justify-cente absolute bottom-0 right-4 font-normal bg-primary-darker rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

