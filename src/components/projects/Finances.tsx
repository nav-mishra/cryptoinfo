import React from 'react'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const data = [
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


const Finances = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-96 '>
                <h2>Floor floor over time</h2>
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
                        <Line type="monotone" name='floor (approx)' dataKey="floor" stroke="#8884d8" />

                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div >
    )
}

export default Finances