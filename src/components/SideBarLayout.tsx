import {Dialog, Transition} from '@headlessui/react'
import {MenuIcon, UserCircleIcon, XIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import {Fragment, useEffect, useState} from 'react'
import {useUser} from '../hooks/useUser'
import {GlobalStateAction, useGlobalDispatch} from '../store/GlobalStore'
import {data} from '../utils/data'
import Header from './Header'
import SideBarMenu from './SideBarMenu'

const SidebarLayout: React.FC = (props) => {
  const router = useRouter()
  const globalDispatch = useGlobalDispatch()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {userLoaded} = useUser()

  useEffect(() => {
    console.log("33", router)
    console.log('pathList', data.pathList)
    console.log("44", userLoaded)
    if (!userLoaded) {
      let authRequired = data.pathList.some(x => x.path === router.pathname && x.authRequired)
      console.log("2", authRequired)
      console.log("3", router)
      console.log("4", userLoaded)
      authRequired && router.replace('/signin')
    }
  }, [userLoaded, router.pathname])

  useEffect(() => {
    let title =
      data.navigation.filter((x) => x.path == router.pathname)[0]?.name ?? ''
    globalDispatch({type: GlobalStateAction.SetPageTitle, title})
  }, [router.pathname])

  return <>
    {/*
    <html class="h-full bg-gray-100">
    <body class="h-full">

  */}
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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

              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <UserCircleIcon className='font-light text-gray-300' width={40} height={40} />
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">Tom Cook</p>
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
          <SideBarMenu />
          <div className="flex-shrink-0 flex bg-gray-700 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Tom Cook</p>
                  <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div >
      </div >
      <div className="md:pl-64  flex flex-col flex-1">
        <div className="sticky flex items-center gap-4 top-0 z-10 md:hidden pl-1 py-1 sm:pl-3 sm:py-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />

          </button>
          <span className='text-xl font-semibold'>Crypto Info</span>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div >
  </>

}

export default SidebarLayout
