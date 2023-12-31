import InputErrorMessage from "../auth/InputErrorMessage"



export default function EditInputForm({ title, placeholder, value, name, onChange, errorInput, type = 'text' }) {

    return (
        <div>
            <div className='flex sm:flex-col gap-2'>
                <label className='font-semibold text-semantic-textPrimary'>{title}</label>
                <div className='flex flex-col m-auto justify-center mr-6'>
                    <input
                        type={type}
                        className={` bg-slate-50 outline-none flex border-b-2 border-primary-darker w-[360px] m-auto justify-center text-black mr-6 ${errorInput ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={onChange}
                    ></input>
                    {typeof errorInput !== "undefined" && <InputErrorMessage message={errorInput} />}
                </div>
            </div>
        </div>
    )
}
