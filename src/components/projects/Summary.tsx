import React from 'react'
import {CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'


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

const Summary = () => {
    return (
        <div>
            <section>
                <p>Jenkins the Valet, which started out as Ape #1798 in the Bored Ape Yacht Club (BAYC) Collection is the face of a new kind of media company, where IP is managed via NFTs. Tally Labs LLC turned Ape #1798 into a character called Jenkins the Valet, and plans to create a connected set Intellectual Property assets which people can interact with via NFTs.</p>
                <br />
                <p>The right to vote on the plot of their first product - a book - has been sold via a set of NFTs called the Writers Room. The 6,942 NFTs in this collection have sold 10,328 times with a total volume of 4,347.37 ETH. Revenue is generated mainly from a 5% royalty on secondary sales. This will be supplemented in the future with new media sales and licensing. Finally a partnership with CAA lets Tally Labs access a wide array of artists who can power the creation of a diversified content universe.</p>

                <p className='my-4'>
                    <span>Company History & Key People</span>
                    <ul className='list-disc'>
                        <li className='ml-12 list-item'>The core team is pseudonymous:</li>
                        <li className='ml-12 list-item'>Jenkins - Lead product manager at a public tech company.</li>
                        <li className='ml-12 list-item'>See Ape Follow Ape (SAFA) - works on marketing and branding</li>
                        <li className='ml-12 list-item'>Foobar - Solidity developer with previous experience including Gamestop’s upcoming NFT, Revest Finance, and HD Punks</li>
                    </ul>
                </p>

            </section>
            <section className='mt-4'>
                <div className="grid grid-cols-2 h-full gap-4">

                    <section className='w-full h-96'>
                        <h2 className='mx-12 text-lg font-semibold'>Unique holders</h2>
                        <ResponsiveContainer className='' width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}

                                margin={{
                                    top: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="holders" stroke="#8884d8" />
                                <Line type="monotone" dataKey="new" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                            </LineChart>
                        </ResponsiveContainer>
                    </section>
                    <section className='w-full h-96'>
                        <h2 className='mx-12 text-lg font-semibold'>Floor over time</h2>
                        <ResponsiveContainer className='' width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={dataF}

                                margin={{
                                    top: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" name='floor (approx)' dataKey="floor" stroke="#8884d8" />

                            </LineChart>
                        </ResponsiveContainer>
                    </section>
                    <section className='w-full h-96'>
                        <h2 className='mx-12 text-lg font-semibold'>Type of holders</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={dataPie}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend className='overflow-hidden' verticalAlign="middle" align='right' />

                            </PieChart>
                        </ResponsiveContainer>
                    </section>
                    <section className='w-full h-96'>
                        <h2 className='mx-12 text-lg font-semibold'>Treasury over time</h2>
                        <ResponsiveContainer className='' width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={dataTreasury}

                                margin={{
                                    top: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" name='floor (approx)' dataKey="floor" stroke="#8884d8" />

                            </LineChart>
                        </ResponsiveContainer>
                    </section>
                </div>
            </section >
        </div >
    )
}

export default Summary