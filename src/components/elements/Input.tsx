import React, {HTMLInputTypeAttribute} from 'react'

const Input = ({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
}: {
  type: HTMLInputTypeAttribute
  name: string
  id?: string
  placeholder: string
  onChange: (name: string, value: string) => void
  value: string
}) => {
  return (
    <div>
      <label htmlFor='email' className='sr-only'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={id ?? name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
      />
    </div>
  )
}

export default Input
