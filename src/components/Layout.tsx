import {useRouter} from 'next/router'
import {ReactNode, useEffect, useState} from 'react'
import {useUser} from '../hooks/useUser'
import {GlobalStateAction, useGlobalDispatch} from '../store/GlobalStore'
import {data} from '../utils/data'
import {getNavigationItem} from '../utils/helpers'
import TopHeader from './TopHeader'

const Layout: React.FC<{children: ReactNode}> = (props) => {
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
    if (!userLoaded) {
      let authRequired = data.pathList.some(x => x.path === router.pathname && x.authRequired)
      authRequired && router.replace('/signin')
    }
  }, [userLoaded, router.pathname])

  useEffect(() => {
    let title = getNavigationItem(router.pathname)
    globalDispatch({type: GlobalStateAction.SetPageTitle, title: title?.pageTitle ?? ''})
  }, [router.pathname])

  return (
    <div className="flex flex-col h-full">
      <TopHeader />

      <main className='flex-1 flex-grow flex-shrink-0 py-4 px-4'>
        <div className="">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default Layout
