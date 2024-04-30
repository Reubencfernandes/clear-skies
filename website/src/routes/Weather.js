import React from 'react'
import Air from '../Components/Air'
import MinMax from '../Components/MimMax'
import Location from '../Components/Location'
import Chart from '../Components/Chart'
import CurrentWeather from '../Components/CurrentWeather'
import Navbar from '../Components/Navbar'
import Sunrisesunset from '../Components/Sunrisesunset'
import Info from '../Components/Info'
import Forecast from '../Components/Forecast'
const Weather = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-2'>
      <div>
      <CurrentWeather/>
      </div>  
      <div>
      <Air/>
      </div>
      <div>
      <MinMax/>
      <Sunrisesunset/>
      </div>
      <div>
      <Info/>
      </div>
      </div>
      <Chart />
        <Forecast/>
    <Location/>
    </div>
  )
}

export default Weather
