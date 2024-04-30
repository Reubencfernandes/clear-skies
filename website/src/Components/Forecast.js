import React from 'react'
// Current Weather Details
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons'
const Forecast = () => {
  return (
    <>
      <div>
        <h1 className='font-body text-3xl font-semibold ml-3'>Forecast</h1>
      </div>
      <div className='flex'>
        <div className='border border-[#878787] rounded-xl text-black m-3 p-3'>
          <div className='flex'>
            <div>
            <WeatherIcon className='p-3 text-[#DA683A] text-3xl' iconId={200} name="owm" />
            </div>
            <div className='mr-3'>
              <h1 className='font-bebas text-3xl'>MAY 21</h1>
              <h1 className='font-body text-xl font-semibold '>clear sky</h1>
            <p className='font-bebas text-[#DA683A] text-xl'>11°C/17°C</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forecast