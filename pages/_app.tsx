import {AppProps} from 'next/app'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'
import RouteLoadingIndicator from '../src/components/RouteLoadingIndicator'
import '../src/global.css'
import {UserContextProvider} from '../src/hooks/useUser'
import {GlobalStateProvider} from '../src/store/GlobalStore'
import {LoadingStateProvider} from '../src/store/LoadingStore'


const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  const router = useRouter()

  return (

    <UserContextProvider>
      <GlobalStateProvider>
        <LoadingStateProvider>
          <RouteLoadingIndicator />
          <div className='flex flex-col min-h-screen'>
            <Head>
              <meta name='description' content='Generated by create next app' />
              <link rel='icon' href='/favicon.ico' />
            </Head>

            {router.route.startsWith('/signin') || router.route.startsWith('/signup') ? (
              <Component {...pageProps} />
            ) : (
              <div className='flex flex-col items-stretch justify-between flex-grow '>
                <div className='flex-grow h-full '>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </div>
                <Footer />
              </div>
            )}
          </div>
        </LoadingStateProvider>
      </GlobalStateProvider>
    </UserContextProvider>
  )
}

export default MyApp
