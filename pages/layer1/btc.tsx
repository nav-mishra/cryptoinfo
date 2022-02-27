import type {NextPage} from 'next'
import {InferGetStaticPropsType} from 'next'
import {useRouter} from 'next/router'
import {useMemo} from 'react'
import {Column, useTable} from 'react-table'
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

interface IData {
    month: string
    day: number
    AdrActCnt: string
    asset: string
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
    const router = useRouter()
    const {user} = useUser()

    const columns: Column<IData>[] = useMemo(() => [
        {
            Header: 'Month',
            accessor: 'month',
        },
        {
            Header: 'Day',
            accessor: 'day',
        },
        {
            Header: 'Address Count',
            accessor: 'AddrActCnt',
        },
        {
            Header: 'Asset',
            accessor: 'asset',
        }
    ], [])

    const {rows, headers, prepareRow, getTableBodyProps, getTableProps} = useTable({
        columns: columns,
        data: useMemo(() => [...props.posts.map(x => {
            month: months[new Date(Date.parse(x.time)).getMonth()],
                day: new Date(Date.parse(x.time)).getDate(),
                    AdrActCnt: x.AdrActCnt,
                        asset: x.asset,
            })]
        ], [props.posts])
    })

return <div className='w-full'>
    <LoadingIndicator open={!props.posts} />
    <div className='w-full  text-gray-600 body-font'>
        <div className="w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap" {...getTableProps()}>
                <thead>
                    <tr>
                        {headers.map((column, index) => <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl" key={index}>{column.render('Header')}</th>)}
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((x, index) => {

                        prepareRow(x)
                        return <tr  {...x.getRowProps()} key={index}>
                            {
                                x.cells.map((cell, ci) => <td className="px-4 py-3" {...cell.getCellProps()} key={ci}>{cell.render('Cell')}</td>)
                            }
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    </div>
</div >
}

export default Home
