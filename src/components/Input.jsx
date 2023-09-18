import React from 'react'

const Input = ({type,placeholder,handleFormChange,value,error,name,spread }) => {

  return (
    <div className={spread}>
        <div className='flex justify-between items-center px-1 mb-3'>
            <label htmlFor={name} className='text-almostBlack font-semibold capitalize '>{name}</label>
            <small className='message text-red-400 font-medium mr-2'>{error}</small>
        </div>
            <input type={type} className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
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
