import type {NextPage} from 'next'
import {InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import LoadingIndicator from '../src/components/LoadingIndicator'
import {useUser} from '../src/hooks/useUser'
import constants from '../src/utils/constants'


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
    if (!user && constants.forceAuth) router.replace('/signin')
  }, [user])

  return <div className='w-full'>
    <LoadingIndicator open={!props.posts} />
    <div className='w-full  text-gray-600 body-font'>

      <div className="w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Month</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Day</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Address count</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Asset</th>
            </tr>
          </thead>
          <tbody>
            {props.posts.map((x, index) =>
              <tr key={index}>

                <td className="px-4 py-3">{months[new Date(Date.parse(x.time)).getMonth()]}</td>
                <td className="px-4 py-3">{new Date(Date.parse(x.time)).getDay()}</td>
                <td className="px-4 py-3">{x.AdrActCnt}</td>
                <td className="px-4 py-3 text-lg text-gray-900">{x.asset}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  </div >
}

export default Home
