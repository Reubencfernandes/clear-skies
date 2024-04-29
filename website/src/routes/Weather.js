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
      <CurrentWeather/>
      <Air/>
      <MinMax/>
      <Sunrisesunset/>
      <Info/>
      <div style={{ width: '100%', height: '500px' }}> {/* Ensure the container has height */}
      <Chart />
    </div>
        <Forecast/>
    <Location/>
    </div>
  )
}

export default Weather
