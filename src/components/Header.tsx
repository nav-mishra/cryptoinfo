import React from 'react'
import {useGlobalState} from '../store/GlobalStore'

const Header = () => {
  const globalState = useGlobalState()
  return (
    <header className='pt-4'>
      <div className='pb-6 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-medium text-gray-800'>
          {globalState.pageTitle}
        </h1>
      </div>
    </header>
  )
}

export default Header
