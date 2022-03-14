import {Dialog, Transition} from '@headlessui/react'
import {LoginIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Fragment, useEffect, useState} from 'react'
import {useUser} from '../hooks/useUser'
import {GlobalStateAction, useGlobalDispatch} from '../store/GlobalStore'
import {classNames} from '../utils/cssUtils'
import {data} from '../utils/data'
import {getNavigationItem} from '../utils/helpers'
import Header from './Header'
import SideBarMenu from './SideBarMenu'
import UserDetails from './UserDetails'

const SidebarLayout: React.FC = (props) => {
  const router = useRouter()
  const globalDispatch = useGlobalDispatch()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {userLoaded, user} = useUser()

  useEffect(() => {
    if (!userLoaded) {
      let authRequired = data.pathList.some(x => x.path === router.pathname && x.authRequired)
      authRequired && router.replace('/signin')
    }
  }, [userLoaded, router.pathname])

  useEffect(() => {

    let title = getNavigationItem(router.pathname)
    console.log('SidebarLayout.useEffect', title?.name, title?.pageTitle)
    console.log('SidebarLayout.useEffect', router.pathname)
    globalDispatch({type: GlobalStateAction.SetPageTitle, title: title?.pageTitle ?? ''})
  }, [router.pathname])

  return <>
    <div className=''>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden border-r border-gray-800" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <SideBarMenu />

              <div className="flex-shrink-0 flex bg-gray-800 p-4">
                {userLoaded ? <UserDetails email={user?.email ?? 'User'} /> : <div><Link href='/signin'>SignIn</Link></div>}

              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0  border-r border-gray-600 ">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 ">
          <SideBarMenu />
          <div className=" flex bg-gray-800 h-12 justify-center items-stretch">
            {userLoaded ? <UserDetails email={user.email ?? ''} /> : <Link
              href={'/signin'}>
              <a
                className={classNames(
                  'w-full text-gray-300 hover:bg-gray-800 hover:text-white',
                  'group flex items-center px-4 py-2 text-sm rounded-md'
                )}
              >
                <LoginIcon
                  className={classNames(
                    false ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {'Sign In'}
              </a>
            </Link>}
          </div>
        </div >
      </div >
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky flex items-center gap-4 top-0 z-10 md:hidden pl-1 py-1 sm:pl-3 sm:py-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />

          </button>
          <span className='text-xl font-semibold'>Crypto Info</span>
        </div>
        <main className="flex-1">
          <div className="flex flex-col">
            <Header />
            <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div >
  </>

}

export default SidebarLayout
