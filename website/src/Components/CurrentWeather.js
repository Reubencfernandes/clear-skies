import React from 'react'
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons'
import Flag from 'react-flagkit';
const CurrentWeather = (props) => {
    return (
        <div className='bg-hm text-white rounded-3xl bg-cover bg-center bg-no-repeat m-4 font-body'>
            <div className='flex justify-between p-5'>
                <div className='flex'>
                    <WeatherIcon className='text-3xl wi-thermometer-exterior' iconId={802} name="owm" />
                    <p className='pl-2 text-md'>Temperature</p>
                </div>
                <div>
                    <h1 className='font-bebas text-3xl'>{props.date}</h1>
                    <h1 className='font-bebas'>{props.time}</h1>
                </div>
            </div>
            <div className='p-2'>
                <div className='flex p-1'>
            <Flag country={props.country} />
            <h1 className='font-bebas text-5xl pl-2'>{props.name}</h1>
                </div>
            <p className='font-bebas ml-10 text-xl'> {props.lat}, {props.lon}</p>
            <h1 className='font-bebas text-4xl ml-10'>{props.temp}°C</h1>
            <p className='ml-10 text-md'>{props.description}</p>
            </div>
        </div> 
    )
}

export default CurrentWeather