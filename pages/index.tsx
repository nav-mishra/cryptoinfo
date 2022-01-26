import type {NextPage} from 'next'
import {InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {useUser} from '../src/hooks/useUser'


export interface Datum {
  asset: string
  time: string
  AdrActCnt: string
}

export interface RootObject {
  data: Datum[]
  next_page_token: string
  next_page_url: string
}



export const getStaticProps = async () => {
  const res = await fetch('https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?assets=btc&metrics=AdrActCnt')
  const data: RootObject = await res.json()

  return {
    props: {
      posts: data.data,
    },
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
  const router = useRouter()
  const {user} = useUser()

  useEffect(() => {
    if (!user) router.replace('/signin')
  }, [user])

  return (<div className='w-full flex'>
    <LoadingIndicator open={!props.posts} />
    <div className='w-full flex flex-row flex-wrap'>
      {
        props.posts.map((x, index) => <section key={index} className="text-gray-600 body-font">
          <div className=" px-5 py-4 ">
            <div className="flex flex-wrap -mx-4 -my-8">
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{months[new Date(Date.parse(x.time)).getMonth()]}</span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{new Date(Date.parse(x.time)).getDate()}</span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{x.asset}</h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{x.AdrActCnt}</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
    </div>
  </div>)
}

export default Home
