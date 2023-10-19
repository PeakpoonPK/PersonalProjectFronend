import InputErrorMessage from "../auth/InputErrorMessage"
import { useState } from "react"


export default function EditInputForm(prop) {
    const { title, placeholder, value, name, onChange, errorInput } = prop;
    const [error, setError] = useState(null)

    return (
        <div>
            <div className='flex sm:flex-col gap-2'>
                <label className='font-semibold text-semantic-textPrimary'>{title}</label>
                <div className='flex flex-col m-auto justify-center mr-6'>
                    <input
                        className={` bg-slate-50 outline-none flex border-b-2 border-primary-darker w-[360px] m-auto justify-center text-black mr-6 ${errorInput ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={onChange}
                    ></input>
                    {error && <InputErrorMessage message={errorInput} />}
                </div>
            </div>
        </div>
    )
}
