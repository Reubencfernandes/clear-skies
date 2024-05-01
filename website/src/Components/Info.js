import React from 'react'

const Info = (props) => {
  return (
    <div className="bg-[#1E1E1E] text-white rounded-3xl m-4 grid grid-cols-2 p-3 text-center">
      <div className='py-4'>
        <h1 className='font-bebas text-5xl'>{props.visibility} km</h1>
        <p className='font-body text-xl'>Visibility</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-5xl'>{props.windspeed} m/s</h1>
        <p className='font-body text-xl'>Wind speed</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-5xl'>{props.humidity}%</h1>
        <p className='font-body text-xl'>Humidity</p>
      </div>

      <div className='py-4'>
        <h1 className='font-bebas text-5xl'>{props.pressure} hPa</h1>
        <p className='font-body text-xl'>pressure</p>
      </div>
    </div>
  )
}

export default Info
