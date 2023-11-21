import { useState } from "react"




export default function AppoimentHeader() {
    const [clickOnlyDate, setOnlyDate] = useState(false)
    const [clickDate, setClickDate] = useState(false)
    const [clickDoctor, setClickDoctor] = useState(false)

    console.log(clickDate)
    const handleClickDate = e => {
        setOnlyDate(true)
        setClickDate(true)
    }

    const handleClickOnlyToday = e => {
        setOnlyDate(true)
    }
    const handleClickDoctor = e => setClickDoctor(true)

    const inputSelectDate = `w-96 rounded-lg  text-primary-darker border-2 border-primary-darker p-1  text-xl text-center ${clickDate ? "" : "hidden"}`
    const inputSelectDoctor = `w-96 rounded-lg  text-primary-darker border-2 border-primary-darker p-1  text-xl text-center ${clickDoctor ? "" : "hidden"}`
    const labelInput = 'text-xl text-primary-darker'

    return (
        <div className="flex flex-col m-auto gap-8 pt-10">
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <input onChange={handleClickOnlyToday} type="checkbox" name="chooseDate" className=" w-6 h-6 border-2 " />
                    <label className={labelInput}>Today </label>
                </div>
                <div className="flex gap-4" >
                    <div className="flex gap-4 items-center">
                        <input onChange={handleClickDate} type="checkbox" name="chooseDate" className=" w-6 h-6 border-2 " />
                        <label className={labelInput}>Start </label>
                        <input type="date" className={inputSelectDate} />
                    </div>
                    <div className={` gap-4 items-center ${clickDate ? "" : "hidden"} `}>
                        <label className={labelInput}>To </label>
                        <input type="date" className={inputSelectDate} />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <input onChange={handleClickDoctor} type="checkbox" name="doctorName" className=" w-6 h-6 border-2 " />
                <label className={labelInput}>Doctor </label>
                <select name="doctor" className={inputSelectDoctor} >
                    <option>Select a Doctor</option>
                </select>
            </div>
            {/* <div className="flex gap-4 items-center">
                <input type="checkbox" name="room" className=" w-6 h-6 border-2 " />
                <label className={labelInput}>Room </label>
                <select name="doctor" className={inputSelect} >
                    <option>Select a Room</option>
                </select>
            </div> */}
        </div>
    )
}
