import {MenuIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {useUser} from '../hooks/useUser'
import {GlobalStateAction, useGlobalDispatch} from '../store/GlobalStore'
import {data} from '../utils/data'
import {getNavigationItem} from '../utils/helpers'
import Footer from './Footer'
import TopHeader from './TopHeader'

const Layout: React.FC = (props) => {
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
    globalDispatch({type: GlobalStateAction.SetPageTitle, title: title?.pageTitle ?? ''})
  }, [router.pathname])

  return <div className='h-full flex flex-col items-stretch justify-between  '>
    <div className=' h-screen'>
      <TopHeader />
      <div className="flex flex-col flex-1">
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
        <main className="">
          {props.children}
        </main>
      </div>
    </div >
    <div>
      <Footer />
    </div>
  </div>
}

export default Layout
