

const headerTable = [
    { id: 1, title: 'No.' },
    { id: 2, title: 'Time' },
    { id: 3, title: 'Animal name' },
    { id: 4, title: 'Owner' },
    { id: 5, title: 'Room' },
    { id: 6, title: 'Doctor' },
]

export default function AppointmentTable() {
    return (
        <div>
            <table className="table-auto text-xl text-primary-darker ">
                <tr className="font-thin p-2 bg-semantic-lightCream ">
                    {headerTable.map((el, headerId) => {
                        return <th key={headerId} className="border-2 border-semantic-darkCream py-4 px-14">{el.title}</th>
                    })}
                </tr>
                <tr className="border-2 border-semantic-darkCream text-center">
                    <td>1</td>
                    <td>9:00-9:30</td>
                    <td>Duffie</td>
                    <td>Micky</td>
                    <td>Cardiology</td>
                    <td>Peerapan Komol</td>
                </tr>
                <tr className="border-2 border-semantic-darkCream text-center">
                    <td>1</td>
                    <td>9:00-9:30</td>
                    <td>Duffie</td>
                    <td>Micky</td>
                    <td>Cardiology</td>
                    <td>Peerapan Komol</td>
                </tr>
                <tr className="border-2 border-semantic-darkCream text-center">
                    <td>1</td>
                    <td>9:00-9:30</td>
                    <td>Duffie</td>
                    <td>Micky</td>
                    <td>Cardiology</td>
                    <td>Peerapan Komol</td>
                </tr>
            </table>
        </div>
    )
}
