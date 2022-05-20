import type {NextPage} from 'next'
import {InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import LoadingIndicator from '../../src/components/LoadingIndicator'
import {useUser} from '../../src/hooks/useUser'

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

    return <div className='w-full'>
        <LoadingIndicator open={!props.posts} />
        <div className='w-full  body-font'>

            <div className="w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr className='dark:bg-gray-800'>
                            <th className="px-4 py-3 title-font tracking-wider font-medium  rounded-tl rounded-bl">Month</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium ">Day</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium ">Address count</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium ">Asset</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.posts.map((x, index) =>
                            <tr key={index} className='hover:bg-gray-800'>
                                <td className="px-4 py-3">{months[new Date(Date.parse(x.time)).getMonth()]}</td>
                                <td className="px-4 py-3">{new Date(Date.parse(x.time)).getDay()}</td>
                                <td className="px-4 py-3">{x.AdrActCnt}</td>
                                <td className="px-4 py-3 text-lg ">{x.asset}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    </div >
}

export default Home
