import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
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
  const [locname, setlocname] = useState(" ")
  const [loclat, setloclat] = useState(" ")
  const [loclon, setloclon] = useState(" ")
  const [flag, setflag] = useState(" ")
  const [date, setdate] = useState(" ")
  const [sunrise, setsunrise] = useState(" ")
  const [sunset, setsunset] = useState("")
  const [temp, settemp] = useState("")
  const [feelslike, setfeelslike] = useState("")
  const [humidity, sethumidity] = useState("")
  const [visibility, setvisibility] = useState("")
  const [windspeed, setwindspeed] = useState("")
  const [mintemp, setmintemp] = useState(" ")
  const [maxtemp, setmaxtemp] = useState(" ")
  const [pressure, setpressure] = useState(" ")
  const [AQI, setAQI] = useState(" ")
  const [time, settime] = useState(" ")
  const [description, setdescription] = useState("")

  let lon = useParams().lon;
  let lat = useParams().lat;
  let name = useParams().name
  useEffect(() => {
    fetch(`http://localhost:10/find/${lat}/${lon}`).then(response => response.json()).then(data => {
      console.log(data)
      const date = new Date(data.dt * 1000);
      const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      console.log(`${day} ${month}`)
      setlocname(data.name)
      setloclat(data.coord.lat)
      setloclon(data.coord.lon)
      setdescription(data.weather[0].description)
      setdate(`${day} ${month}`)
      settime(`${hours}:${minutes}`)
      setflag(`${data.sys.country}`)
      setsunrise(data.sys.sunrise)
      setsunset(data.sys.sunset)
      settemp(data.main.temp)
      setfeelslike(data.main.feels_like)
      sethumidity(data.main.humidity)
      setvisibility(data.visibility)
      setwindspeed(data.wind.speed)
      setmintemp(data.main.temp_min)
      setmaxtemp(data.main.temp_max)
      setpressure(data.main.pressure)
      fetch(`http://localhost:10/air/${lat}/${lon}`).then(response => response.json()).then(data => {
        setAQI(data.list[0].main.aqi)
    })
    fetch(`http://localhost:10/UpdateCount/${data.name}/${data.lat}/${data.lon}`)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className='md:grid grid-cols-2'>
        <div>
          <CurrentWeather name={locname} lat={loclat} lon={loclon} flag={flag} date={date} time={time} description={description} temp={temp} />
        </div>
        <div>
          <Air AQI={AQI} />
        </div>
        <div>
          <MinMax feelslike={feelslike} mintemp={mintemp} maxtemp={maxtemp}/>
          <Sunrisesunset sunset={sunset} sunrise={sunrise}/>
        </div>
        <div>
          <Info humidity={humidity} windspeed={windspeed} pressure={pressure} visibility={visibility} />
        </div>
      </div>
      <Chart />
      <Forecast />
      <Location />
    </div>
  )
}

export default Weather
