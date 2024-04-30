import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { name: '6 AM', temperature: 20 },
  { name: '9 AM', temperature: 22 },
  { name: '12 PM', temperature: 35 },
  { name: '3 PM', temperature: 30 },
  { name: '6 PM', temperature: 25 },
  { name: '9 PM', temperature: 22 },
  { name: '12 AM', temperature: 20 },
];
const Chart = () => {
  return (
    <div className='border rounded-xl font-body m-4 p-5 border-[#878787]'>
      <h1 className='font-bebas text-3xl'>FORECAST TODAY</h1>
    <ResponsiveContainer
    height={300}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis  axisLine={false} tickLine={false} dataKey="name" className='font-bold text-body text-black ' />
      <Tooltip />
      <Area type="monotone" dataKey="temperature" stroke="#B04043" fill="rgba(197, 46, 46, 0.19)" strokeWidth={3} />
    </AreaChart>
  </ResponsiveContainer>
  </div>
  )
}

export default Chart
