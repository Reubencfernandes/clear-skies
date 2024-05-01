import React from 'react';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

const Air = (props) => {
    const widthMap = {
        1: '20',   // Good
        2: '40',   // Fair
        3: '60',   // Moderate
        4: '80',   // Poor
        5: '100'   // Very Poor
    };

    // Get width percentage from map based on props.AQI
    const widthPercentage = widthMap[props.AQI] || '0';

    return (
        <div className='bg-air bg-center bg-no-repeat text-white rounded-3xl bg-cover m-4 font-body p-3'>
            <div className='flex p-1'>
                <WeatherIcon className='text-3xl wi-cloudy-gusts' iconId={200} name="owm"/>
                <p className='mt-2 pl-1'>Air Quality</p>
            </div>
            <p className='ml-10 font-semibold'>PM2.5</p>
            <h1 className='font-bebas text-6xl ml-9'>{props.PM}</h1>
            <div className='bg-white rounded-3xl m-5 p-6'>
                <div className='flex text-black justify-between font-semibold'>
                    <div><p>Good</p></div>
                    <div><p>Moderate</p></div>
                    <div><p>Hazard</p></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 ">
                    <div className="bg-[#DA683A] h-2.5 rounded-full" style={{ width: `${widthPercentage}%` }}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Air;
