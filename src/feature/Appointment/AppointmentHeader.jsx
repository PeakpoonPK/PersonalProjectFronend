

const inputSelect = 'w-96 rounded-lg  text-primary-darker border-2 border-primary-darker p-1  text-xl text-center'
const labelInput = 'text-xl text-primary-darker'

export default function AppoimentHeader() {
    return (
        <div className="flex flex-col m-auto gap-8 pt-10">
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <input type="checkbox" name="chooseDate" className=" w-6 h-6 border-2 " />
                    <label className={labelInput}>Today </label>
                </div>
                <div className="flex gap-4" >
                    <div className="flex gap-4 items-center">
                        <input type="checkbox" name="chooseDate" className=" w-6 h-6 border-2 " />
                        <label className={labelInput}>Start </label>
                        <input type="date" className={inputSelect} />
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className={labelInput}>To </label>
                        <input type="date" className={inputSelect} />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <input type="checkbox" name="doctorName" className=" w-6 h-6 border-2 " />
                <label className={labelInput}>Doctor </label>
                <select name="doctor" className={inputSelect} >
                    <option>Select a Doctor</option>
                </select>
            </div>
            <div className="flex gap-4 items-center">
                <input type="checkbox" name="room" className=" w-6 h-6 border-2 " />
                <label className={labelInput}>Room </label>
                <select name="doctor" className={inputSelect} >
                    <option>Select a Room</option>
                </select>
            </div>
        </div>
    )
}
