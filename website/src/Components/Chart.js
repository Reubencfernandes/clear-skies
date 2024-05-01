import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = (props) => {
  return (
    <div className='border rounded-xl font-body m-4 p-5 border-[#878787]'>
      <h1 className='font-bebas text-3xl'>FORECAST TODAY</h1>
    <ResponsiveContainer
    height={400}>
    <AreaChart
      width={500}
      height={400}
      data={props.data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis  axisLine={false} tickLine={false} dataKey="hour" className='font-bold text-body text-black ' padding={{ left: 15 }}/>
      <YAxis  axisLine={false} tickLine={false}/>
      <Tooltip />
      <Area  type='monotone' dataKey="temperature" stroke="#B04043" fill="rgba(197, 46, 46, 0.19)" strokeWidth={3} />
    </AreaChart>
  </ResponsiveContainer>
  </div>
  )
}

export default Chart
