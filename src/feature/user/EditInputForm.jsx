import InputErrorMessage from "../auth/InputErrorMessage"

export default function EditInputForm({ title, placeholder, value, name, onChange, error }) {
    return (
        <div>
            <div className='flex sm:flex-col gap-2'>
                <label className='font-semibold text-semantic-textPrimary'>{title}</label>
                <div className='flex flex-col m-auto justify-center mr-6'>
                    <input
                        className={` bg-slate-50 outline-none flex border-b-2 border-primary-darker w-[360px] m-auto justify-center text-black mr-6 ${error.email ? 'border-b-2 border-error-main' : ' focus:border-b-2 focus:border-error-pressed'}`}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={onChange}
                    ></input>
                    {error && <InputErrorMessage message={error} />}
                </div>
            </div>
        </div>
    )
}
