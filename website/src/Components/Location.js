import React from 'react'
import Flag from 'react-flagkit';
const Location = () => {
  return (
    <>
    <div>
      <h1 className='font-body text-3xl font-semibold ml-3'>Most Searched Location</h1>
    </div>
    <div>
    <div className='border border-[#878787] rounded-xl text-black bg-location  m-3 p-3'>
      <div className='flex justify-between'>
      <h1 className='font-bebas text-3xl'>Tokyo</h1>
      <Flag country='JP'/>
      </div>
      <h1 className='font-bebas text-3xl'>11°C</h1>
      <p className='font-body font-semibold'>Cloudy</p>
    </div>
    </div>
    </>
  )
}

export default Location