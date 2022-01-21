import '../src/global.css'
import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import Layout from '../src/components/Layout'
import RouteLoadingIndicator from '../src/components/RouteLoadingIndicator'
import { UserContextProvider } from '../src/hooks/useUser'
import { GlobalStateProvider } from '../src/store/GlobalStore'
import { LoadingStateProvider } from '../src/store/LoadingStore'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
          <div className='min-h-screen flex'>
            {router.route.startsWith('/signin') ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </div>
        </LoadingStateProvider>
      </GlobalStateProvider>
    </UserContextProvider>
  )
}

export default MyApp
