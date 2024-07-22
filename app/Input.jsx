import React from 'react'

export default function Input({ id, className = '', name, onChange, label, ...props }) {
  return (
    <div className='my-6'>
      <label className='block my-2' htmlFor={id}>{label}</label>
      <input type="number"  
        id={id}
        className={`p-2 border-2 w-full border-white bg-transparent${className}`}
        name={name}
        onChange={onChange}
        {...props}/>
    </div>
  )
}
