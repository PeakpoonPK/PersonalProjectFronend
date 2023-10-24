import { useEffect, useState } from 'react'
import axios from '../../config/axios'


const headerTable = [
    { id: 1, title: 'No.' },
    { id: 2, title: 'Time' },
    { id: 3, title: 'Animal name' },
    { id: 4, title: 'Room' },
    { id: 5, title: 'Doctor' },
]



export default function AppointmentTable() {

    const [allmyAppointment, setAllmyAppointment] = useState([])

    useEffect(() => {
        axios.get('/booking/allbooking')
            .then((res) => {
                setAllmyAppointment(res.data.appointment)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <table className="table-auto text-xl text-primary-darker ">
                <tbody>
                    <tr className="font-thin p-2 bg-semantic-lightCream ">
                        {headerTable.map((el, headerId) => {
                            return <th key={headerId} className="border-2 border-semantic-darkCream py-4 px-16">{el.title}</th>
                        })}
                    </tr>
                    {allmyAppointment.map((el, appointmentId) => {
                        return (
                            <tr key={appointmentId} className="border-2 border-semantic-darkCream text-center">
                                <td className="border-2 border-semantic-darkCream text-center">{el.id}</td>
                                <td className="border-2 border-semantic-darkCream text-center">{el.timePeroid}</td>
                                <td className="border-2 border-semantic-darkCream text-center">{el.pet.petName}</td>
                                <td className="border-2 border-semantic-darkCream text-center">{el.doctor.specialist}</td>
                                <td className="border-2 border-semantic-darkCream text-center">{el.doctor.firstNameDoctor + ' ' + el.doctor.lastNameDoctor}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}
