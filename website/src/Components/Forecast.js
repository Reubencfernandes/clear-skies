import React from 'react';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';

const Forecast = (props) => {
  if (!props.info) {
    return <h1 className='font-body text-3xl font-semibold ml-3'>Loading forecast info or info is not available...</h1>;
  }
  const forecastEntries = Object.entries(props.info);
  return (
    <>
      <div>
        <h1 className='font-body text-3xl font-semibold ml-3'>Forecast</h1>
      </div>
      <div className='flex flex-wrap'>
        {forecastEntries.map(([key, item]) => (
          <div key={key} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
            <div className='border border-[#878787] rounded-xl text-black m-3 p-3'>
              <div className='flex'>
                <div>
                  <WeatherIcon className='p-3 text-[#DA683A] text-3xl' iconId={item.summary.ids[0]} name="owm" />
                </div>
                <div className='mr-3'>
                  <h1 className='font-bebas text-3xl'>{item.summary.date || 'Date unknown'}</h1>
                  <h1 className='font-body text-xl font-semibold'>{item.summary.descriptions[0]}</h1>
                  <p className='font-bebas text-[#DA683A] text-xl'>{item.summary.tempMin}°C/{item.summary.tempMax}°C</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
