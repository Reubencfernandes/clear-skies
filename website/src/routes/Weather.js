import React, { useEffect } from 'react'
import {useParams } from "react-router-dom";
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
  let {lat , lon} = useParams();
  useEffect(() => {
    console.log(lat,lon)
  }, [])
  
  return (
    <div>
      <Navbar/>
      <div className='md:grid grid-cols-2'>
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
