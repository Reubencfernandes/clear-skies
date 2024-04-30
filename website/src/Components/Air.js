import React from 'react'
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons'
const Air = () => {
    return (
        <div className='bg-air text-white rounded-3xl bg-cover m-4 font-body p-3'>
             <div className='flex p-1'>
                    <WeatherIcon className='text-3xl wi-cloudy-gusts' iconId={200} name="owm"/>
                    <p className='mt-2 pl-1'>Air Quality</p>
                </div>
            <p className='ml-10 font-semibold'>AQI</p>
            <h1 className='font-bebas text-6xl ml-9'>78</h1>
            <div className='bg-white rounded-3xl m-5 p-6'>
                <div className='flex text-black justify-between font-semibold'>
                    <div><p>Good</p></div>
                    <div><p>Moderate</p></div>
                    <div><p>Hazard</p></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                    <div className="bg-[#DA683A] h-2.5 rounded-full w-8">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Air