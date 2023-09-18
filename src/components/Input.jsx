
const Input = ({type,placeholder,handleFormChange,value,error,name,spread,liveValidation }) => {
  const showError = liveValidation && error !== "";
  return (
    <div className={spread}>
        <div className='flex justify-between items-center px-1 mb-3'>
            <label htmlFor={name} className='text-almostBlack font-medium capitalize '>{name}</label>
            <small className={`message text-red-300 font-medium mr-2 scale-0  transition-transform delay-200 ${showError ? "scale-100" : "scale-0"}`}>{error}</small>
        </div>
            <input type={type} className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange focus:border-almostBlack outline-none'
            placeholder={placeholder}
            onChange={handleFormChange}
            name={name}
            value={value}
            required
            id={name}
            />
    </div>
  )
}
export default Input
