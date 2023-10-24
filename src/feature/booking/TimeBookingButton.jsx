import { useState } from "react"

const timePeroid = [
    { id: 1, time: '9:00-9:30' },
    { id: 2, time: '9:30-10:00' },
    { id: 3, time: '10:00-10:30' },
    { id: 4, time: '10:30-11:00' },
    { id: 5, time: '11:00-11:30' },
    { id: 6, time: '11:30-12:00' },
    { id: 7, time: '12:00-12:30' },
    { id: 8, time: '12:30-13:00' },
    { id: 9, time: '13:00-13:30' },
    { id: 10, time: '13:30-14:00' },
    { id: 11, time: '14:00-14:30' },
    { id: 12, time: '14:30-15:00' },
    { id: 13, time: '15:00-15:30' },
    { id: 14, time: '15:30-16:00' },
    { id: 15, time: '16:00-16:30' },
    { id: 16, time: '16:30-17:00' },
]

export default function TimeBookingButton(props) {
    console.log(props)
    return (
        <div className="grid grid-cols-4 justify-center items-center gap-4 p-6">
            {timePeroid.map(el =>
                <button
                    type='button'
                    onClick={() => { props.setClick(el.time) }}
                    key={el.id}
                    className={`flex justify-center items-center text-xl text-primary-darker w-36 p-2 rounded-3xl border-2 border-semantic-darkCream hover:cursor-pointer hover:bg-semantic-darkCream active:bg-semantic-lightCream ${props.click === el.time ? "bg-semantic-darkCream" : " bg-slate-50"} `}>
                    {el.time}
                </button>)}
        </div>
    )
}


