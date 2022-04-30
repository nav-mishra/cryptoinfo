import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import {useUser} from '../hooks/useUser'
import {useGlobalState} from '../store/GlobalStore'
import {classNames} from '../utils/cssUtils'
import {data} from '../utils/data'
import UserDetails from './UserDetails'

const TopHeader = () => {
  const globalState = useGlobalState()
  const {userLoaded, user} = useUser()

  return (
    <Disclosure as="nav" className="shadow">
      {({open}) => (
        <>
          <div className="flex items-center justify-between ">
            <h2 className='font-semibold text-xl flex-shrink-0 px-4  '><Link href="/">Actuals</Link></h2>

            <div className='flex flex-row items-center'>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <div className=" flex items-baseline space-x-4">
                    {data.navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className={classNames(
                          'hover:text-blue-600',
                          'px-3 py-4 text-sm font-medium  border-transparent hover:border-blue-600 border-b-2'
                        )}
                        aria-current={'page'}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="mr-3">
                    {userLoaded && user?.email ? <UserDetails email={user?.email ?? 'User'} /> : <div className='text-sm font-medium'><Link href='/signin'>Sign in</Link></div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md  hover:text-blue-400 hover: focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {data.navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.path}
                  className={classNames(
                    ' hover:text-blue-400',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={'page'}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="ml-3">
                  {userLoaded ? <UserDetails email={user?.email ?? 'User'} /> : <div><Link href='/signin'>SignIn</Link></div>}
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {data.userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium  hover:text-blue-400 hover:"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default TopHeader
