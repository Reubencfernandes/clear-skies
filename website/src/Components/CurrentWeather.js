import React from 'react'
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons'
import Flag from 'react-flagkit';
const CurrentWeather = () => {
    return (
        <div className='bg-hm text-white rounded-3xl bg-cover m-4 font-body'>
            <div className='flex justify-between p-5'>
                <div className='flex'>
                    <WeatherIcon iconId={200} name="owm" />
                    <p className='pl-2'>Temperature</p>
                </div>
                <div>
                    <h1 className='font-bebas text-3xl'>20 MAY</h1>
                    <h1 className='font-bebas'>11:22 PM</h1>
                </div>
            </div>
            <div>
                <div className='flex p-1'>
            <Flag country="US" />
            <h1 className='font-bebas'>London</h1>
                </div>
            <p className='font-bebas'> -0.1152, 51.5005</p>
            <h1 className='font-bebas'>10°C</h1>
            <p>Broken Clouds</p>
            </div>
        </div>
    )
}

export default CurrentWeather