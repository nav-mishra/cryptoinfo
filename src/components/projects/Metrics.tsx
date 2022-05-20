import {CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import {pieData} from '../../utils/data'

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



const Metrics = () => {
    return (
        <div className='flex flex-col'>
            <div className='h-96 '>
                <h2 className='text-lg font-semibold'>Unique holders</h2>
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
            </div>
            <div className='h-96 mt-24'>
                <h2 className='text-lg font-semibold'>Top holders</h2>
                <ResponsiveContainer >
                    <PieChart className=''>
                        <Pie legendType='square' data={pieData} dataKey="value" cx="16.5%" innerRadius={100} outerRadius={140}  >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`#${entry.name.substring(36)}`} />
                            ))}
                        </Pie>
                        <Legend className='overflow-hidden' verticalAlign="top" align='right' height={12} width={800} />
                    </PieChart>

                </ResponsiveContainer>

            </div>
        </div >
    )
}

export default Metrics