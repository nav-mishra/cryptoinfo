import React from 'react'
import {classNames} from '../../utils/cssUtils'

const Button = ({
  text,
  disabled = false,
  type = 'button',
  onClick,
  primary = true,
}: {
  text: string
  type?: 'submit' | 'reset' | 'button' | undefined,
  disabled?: boolean
  onClick: () => void
  primary?: boolean
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => {
        onClick()
      }}
      className={classNames('w-full text-white py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg', primary ? ' bg-indigo-500 border-0' : 'border border-gray-600')}>
      {text}
    </button>
  )
}

export default Button
