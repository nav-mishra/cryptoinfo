import type {AppProps} from 'next/app'
import Head from 'next/head'
import {useRouter} from 'next/router'
import RouteLoadingIndicator from '../src/components/RouteLoadingIndicator'
import SidebarLayout from '../src/components/SideBarLayout'
import '../src/global.css'
import {UserContextProvider} from '../src/hooks/useUser'
import {GlobalStateProvider} from '../src/store/GlobalStore'
import {LoadingStateProvider} from '../src/store/LoadingStore'


function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  return (
    <UserContextProvider>
      <GlobalStateProvider>
        <LoadingStateProvider>
          <RouteLoadingIndicator />
          <Head>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <div className=''>
            {router.route.startsWith('/signin') || router.route.startsWith('/signup') ? (
              <Component {...pageProps} />
            ) : (
              <SidebarLayout>
                <Component {...pageProps} />
              </SidebarLayout>
            )}
          </div>
        </LoadingStateProvider>
      </GlobalStateProvider>
    </UserContextProvider>
  )
}

export default MyApp
