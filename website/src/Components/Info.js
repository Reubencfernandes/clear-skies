import React from 'react'

const Info = () => {
  return (
    <div className="bg-[#1E1E1E] text-white rounded-3xl m-4 grid grid-cols-2 p-3 text-center">
      <div className='py-4'>
        <h1 className='font-bebas text-6xl'>1.8KM</h1>
        <p className='font-body text-xl'>Visibility</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-6xl'>6.26</h1>
        <p className='font-body text-xl'>Wind speed</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-6xl'>60%</h1>
        <p className='font-body text-xl'>Humidity</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-6xl'>980</h1>
        <p className='font-body text-xl'>pressure</p>
      </div>
    </div>
  )
}

export default Info
