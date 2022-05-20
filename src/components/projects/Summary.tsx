import Link from 'next/link'
import React from 'react'
import {CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import {IFeedItem} from '../../types/IFeedItem'
import {IProjectSummary} from '../../types/IProjectSummary'
import LoadingIndicator from '../LoadingIndicator'
import Card from './Card'

const data = [
    {
        name: 'Aug 2021',
        holders: 3300,
        new: 1400,
        amt: 2400,
    },
    {
        name: 'Sep 2021',
        holders: 3800,
        new: 3598,
        amt: 2210,
    },
    {
        name: 'Oct 2021',
        holders: 5300,
        new: 4800,
        amt: 2290,
    },
    {
        name: 'Nov 2021',
        holders: 5810,
        new: 3908,
        amt: 2000,
    },
    {
        name: 'Dec 2021',
        holders: 5290,
        new: 3800,
        amt: 2181,
    },
    {
        name: 'Jan 2022',
        holders: 4390,
        new: 4200,
        amt: 2500,
    },
    {
        name: 'Feb 2022',
        holders: 4908,
        new: 4100,
        amt: 2100,
    },
    {
        name: 'Mar 2022',
        holders: 5590,
        new: 4300,
        amt: 2100,
    },
]

const dataTreasury = [
    {
        name: 'Aug 2021',
        holders: Math.random() * 2000,
        new: Math.random() * 2000,
        amt: Math.random() * 2000,
    },
    {
        name: 'Sep 2021',
        holders: 3300,
        new: 2598,
        amt: 2250,
    },
    {
        name: 'Oct 2021',
        holders: 4300,
        new: 4200,
        amt: 2890,
    },
    {
        name: 'Nov 2021',
        holders: 4610,
        new: 3208,
        amt: 2500,
    },
    {
        name: 'Dec 2021',
        holders: 5290,
        new: 3800,
        amt: 2181,
    },
    {
        name: 'Jan 2022',
        holders: 4390,
        new: 4200,
        amt: 2500,
    },
    {
        name: 'Feb 2022',
        holders: 4908,
        new: 4100,
        amt: 2100,
    },
    {
        name: 'Mar 2022',
        holders: 5590,
        new: 4300,
        amt: 2100,
    },
]

const dataF = [
    {
        name: 'Aug 2021',
        floor: Math.random()


    },
    {
        name: 'Sep 2021',
        floor: Math.random()


    },
    {
        name: 'Oct 2021',
        floor: Math.random()


    },
    {
        name: 'Nov 2021',
        floor: Math.random()


    },
    {
        name: 'Dec 2021',
        floor: Math.random()


    },
    {
        name: 'Jan 2022',
        floor: Math.random()


    },
    {
        name: 'Feb 2022',
        floor: Math.random()


    },
    {
        name: 'Mar 2022',
        floor: Math.random()


    },
]

const dataPie = [
    {name: 'VC', value: 400},
    {name: 'Team', value: 300},
    {name: 'Retail', value: 300},
    {name: 'Other', value: 200},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}% - `}
        </text>
    )
}



const Summary: React.FC<{feeds: IFeedItem[], summary: IProjectSummary}> = ({feeds, summary}) => {
    return (
        <div>
            <LoadingIndicator open={!summary?.description} />
            <section className='grid  md:gird-cols-2 lg:grid-cols-3 gap-2 grid-cols-1'>
                <Card className='flex flex-col lg:col-span-2 bg-gray-50 lg:overflow-auto overflow-scroll' title={'Company History & Key People'}>
                    {summary?.description && <div className='flex flex-col justify-center'>
                        <p>{summary?.description}</p>
                        <br />
                        <p>The right to vote on the plot of their first product - a book - has been sold via a set of NFTs called the Writers Room. The 6,942 NFTs in this collection have sold 10,328 times with a total volume of 4,347.37 ETH. Revenue is generated mainly from a 5% royalty on secondary sales. This will be supplemented in the future with new media sales and licensing. Finally a partnership with CAA lets Tally Labs access a wide array of artists who can power the creation of a diversified content universe.</p>
                        <span className='mt-4'>The core team is pseudonymous:</span>
                        <ul className='list-disc flex-grow'>
                            <li className='ml-12 list-item'>Jenkins - Lead product manager at a public tech company.</li>
                            <li className='ml-12 list-item'>See Ape Follow Ape (SAFA) - works on marketing and branding</li>
                            <li className='ml-12 list-item'>Foobar - Solidity developer with previous experience including Gamestop’s upcoming NFT, Revest Finance, and HD Punks</li>
                        </ul>
                        <nav className='flex  justify-between items-end mt-8'>
                            <a className='text-blue-600 hover:underline' target='_blank' href={summary?.website} rel="noreferrer">Website</a>
                            <a className='text-blue-600 hover:underline' target='_blank' href={summary?.discord} rel="noreferrer">Discord</a>
                            <a className='text-blue-600 hover:underline' target='_blank' href={summary?.twitter} rel="noreferrer">Twitter</a>
                        </nav>
                    </div>}
                </Card>
                <Card className='lg:overflow-auto overflow-scroll bg-gray-50' title={'Unique holders'}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="holders" stroke="#8884d8" />
                            <Line type="monotone" dataKey="new" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
                <Card className='lg:overflow-auto overflow-scroll col-span-1 bg-gray-50 overflow-y-scroll' title={'News'}>
                    {feeds?.length > 0 ?
                        <div className='flex flex-col gap-2 divide-y'>
                            {feeds.slice(0, 5).map((feed, index) =>
                                <Link key={index} href={feed.link} passHref={true}>
                                    <a target={'_blank'} className='flex flex-col p-2 rounded-md hover:bg-gray-200'>
                                        <span key={index}>{feed.title}</span>
                                        <div className='flex justify-between text-sm font-thin'>
                                            <span>{new Date(feed.date).toDateString()}</span>
                                            <span>{new Date(feed.date).toDateString()}</span>
                                        </div>
                                    </a>
                                </Link>
                            )}
                        </div> : <div>No feeds available at this time.</div>
                    }
                </Card>
                <Card className='lg:overflow-auto overflow-scroll bg-gray-50' title={'Floor over time'}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={dataF}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" name='floor (approx)' dataKey="floor" stroke="#8884d8" />

                        </LineChart>
                    </ResponsiveContainer>
                </Card>
                <Card title={'Type of holders'} className=' lg:overflow-auto overflow-scroll bg-gray-50'>
                    <ResponsiveContainer width="100%" height="100%" className='border flex items-center justify-between'>
                        <PieChart >
                            <Pie data={dataPie}
                                labelLine={false}
                                label={renderCustomizedLabel}

                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend className='overflow-hidden' verticalAlign="top" align='right' />

                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card title={'Treasury over time'} className='lg:overflow-auto overflow-scroll bg-gray-50'>
                    <ResponsiveContainer>
                        <LineChart data={dataTreasury}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" name='floor (approx)' dataKey="holders" stroke="#8884d8" />

                        </LineChart>
                    </ResponsiveContainer>
                </Card>
            </section>
        </div >
    )
}

export default Summary