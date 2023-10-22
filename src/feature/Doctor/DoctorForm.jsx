import { useState } from 'react'
import defaultImage from '../../assets/paw.png'
import { useEffect } from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import InputPetForm from '../pets/InputPetForm'

export default function PetsBox() {
    // const [allPet, setAllPet] = useState([])
    // const [allPetByUserId, setAllPetByUserId] = useState([])


    // const deletePet = async (petId) => {
    //     try {
    //         await axios.delete(`/pets/${petId}`);
    //         setAllPetByUserId(allPetByUserId.filter(el => el.id !== petId));
    //         axios.get('/pets/all')
    //             .then((res) => setAllPet(res.data.pet))
    //             .catch(err => console.log(err))
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const handleCickDelete = (id) => {
    //     deletePet(id);
    // }


    // useEffect(() => {
    //     axios.get('/pets/all')
    //         .then((res) => setAllPet(res.data.pet))
    //         .catch(err => console.log(err))
    // }, [])


    return (
        <div className='flex flex-col'>
            {/* {allPet.map((el, petid) => {
                const inputPet = [
                    { id: 1, title: 'Name', data: `${el.petName || "-"}` },
                    { id: 2, title: 'Sex', data: `${el.sex || "-"}` },
                    { id: 3, title: 'Allery', data: `${el.drugAllergy || "-"}` },
                    { id: 4, title: 'Other', data: `${el.Other || "-"}` },
                    { id: 5, title: 'Breed', data: `${el.breed || "-"}` },
                    { id: 6, title: 'Age', data: `${el.age || "-"}` },
                ] */}

            return <div
                key={petid}
                className='p-2 flex'>
                <div className='flex gap-8 mt-6 border-2 sm:border-2 rounded-3xl border-primary-darker justify-center lg:w-[560px] sm:w-[240px] w-[800px] m-auto relative p-4 '>
                    <div className='w-[160px] h-[160px] overflow-hidden rounded-full shadow-md' >
                        {el.petImage ? <img src={el.petImage}></img>
                            : (<img src={defaultImage} alt="pet" className='object-cover h-full aspect-square' />)}
                    </div>
                    <div className='pl-10 grid grid-rows-4 grid-flow-col'>
                        {inputPet.map(pet =>
                            <InputPetForm key={pet.id} title={pet.title} data={pet.data} />
                        )}
                        <div className='flex flex-col row-span-2 relative text-sm'>
                            <button className='flex justify-cente absolute bottom-10 right-4 font-normal bg-secondary-main rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-secondary-dark active:bg-secondary-darker'><Link to={`/pets/editpet/${el.id}`}>Edit</Link></button>
                            <button
                                onClick={() => handleCickDelete(el.id)}
                                className='flex justify-cente absolute bottom-0 right-4 font-normal bg-primary-darker rounded-2xl text-white py-1.5 px-4 hover:cursor-pointer hover:bg-primary-main active:bg-primary-dark'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            })}

        </div >
    )
}

