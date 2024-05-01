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
  const [PM25, setPM25] = useState('')
  const [AQI, setAQI] = useState(" ")
  const [time, settime] = useState(" ")
  const [description, setdescription] = useState("")
  const [sunper, setsunper] = useState('0%')
const [chart, setchart] = useState()
const [forecastData, setforecastData] = useState([])
  let lon = useParams().lon;
  let lat = useParams().lat;
  let name = useParams().name
  const kelvinToCelsius = (kelvin) => {
    return Math.trunc(kelvin - 273.15)
  }
  const FormatTime = (unixTimestamp, timezoneOffsetInSeconds) => {
    const date = new Date(unixTimestamp * 1000)
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000)
    const targetTime = new Date(utc + (timezoneOffsetInSeconds * 1000))

    return targetTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }
  
  const FormatMonth = (unixTimestamp, timezoneOffsetInSeconds) => {
    const date = new Date(unixTimestamp * 1000)
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000)
    const targetDate = new Date(utc + (timezoneOffsetInSeconds * 1000))
    return targetDate.toLocaleString('en-US', {day: 'numeric', month: 'short'});
  }
  const calculateDaylightPercentage = (sunriseTimestamp, sunsetTimestamp, currentTimeStamp, timezoneOffsetInSeconds) => {
    // Convert all timestamps from UNIX time to local time considering timezone offset
    const date = new Date(currentTimeStamp * 1000);
    const sunriseDate = new Date((sunriseTimestamp + timezoneOffsetInSeconds) * 1000);
    const sunsetDate = new Date((sunsetTimestamp + timezoneOffsetInSeconds) * 1000);

    // Adjust the current date by adding the timezone offset in milliseconds
    const currentDate = new Date(date.getTime() + (timezoneOffsetInSeconds * 1000));

    // Calculate total daylight duration in milliseconds
    const totalDaylightDuration = sunsetDate - sunriseDate;

    // Calculate elapsed time since sunrise in milliseconds
    const timeElapsedSinceSunrise = currentDate - sunriseDate;

    // Calculate the percentage of the day that has elapsed since sunrise
    const percentageOfDaylightPassed = (timeElapsedSinceSunrise / totalDaylightDuration) * 100;
console.log(percentageOfDaylightPassed)
    return Math.trunc(percentageOfDaylightPassed);
}


  useEffect(() => {
    Promise.all([
        fetch(`http://localhost:80/find/${lat}/${lon}`).then(response => response.json()),
        fetch(`http://localhost:80/forecast/${lat}/${lon}`).then(response => response.json()),
        fetch(`http://localhost:80/air/${lat}/${lon}`).then(response => response.json())
    ])
    .then(([weatherData, forecastData, airQualityData]) => {
        const date = new Date(weatherData.dt * 1000);
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        setlocname(weatherData.name);
        setloclat(weatherData.coord.lat);
        setloclon(weatherData.coord.lon);
        setdescription(weatherData.weather[0].description);
        setdate(FormatMonth(weatherData.dt, weatherData.timezone));
        settime(FormatTime(weatherData.dt, weatherData.timezone));
        setflag(weatherData.sys.country);
        setsunrise(FormatTime(weatherData.sys.sunrise, weatherData.timezone));
        setsunset(FormatTime(weatherData.sys.sunset, weatherData.timezone));
        settemp(kelvinToCelsius(weatherData.main.temp));
        setfeelslike(kelvinToCelsius(weatherData.main.feels_like));
        sethumidity(weatherData.main.humidity);
        setvisibility((weatherData.visibility / 1000));
        setwindspeed(weatherData.wind.speed);
        setmintemp(kelvinToCelsius(weatherData.main.temp_min));
        setmaxtemp(kelvinToCelsius(weatherData.main.temp_max));
        setpressure(weatherData.main.pressure);
        setchart(forecastData.processedData);
        setforecastData(forecastData.forecast);
        setPM25(airQualityData.list[0].components.pm2_5)
        setAQI(airQualityData.list[0].main.aqi);
        setsunper(calculateDaylightPercentage(weatherData.sys.sunrise,weatherData.sys.sunset,weatherData.dt,weatherData.timezone))
        console.log(forecastData)
        fetch(`http://localhost:80/Update/${weatherData.name}/${weatherData.coord.lat}/${weatherData.coord.lon}/${weatherData.main.temp}/${weatherData.sys.country}/${weatherData.weather[0].description}`);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}, []);


  return (
    <div>
      <Navbar />
      <div className='md:grid grid-cols-2'>
        <div>
          <CurrentWeather name={locname} lat={loclat} lon={loclon} flag={flag} date={date} time={time} description={description} temp={temp} />
        </div>
        <div>
          <Air AQI={AQI} PM={PM25} />
        </div>
        <div>
          <MinMax feelslike={feelslike} mintemp={mintemp} maxtemp={maxtemp} />
          <Sunrisesunset sunset={sunset} sunrise={sunrise} percent={sunper} />
        </div>
        <div>
          <Info humidity={humidity} windspeed={windspeed} pressure={pressure} visibility={visibility} />
        </div>
      </div>
      <Chart data={chart}/>
      <Forecast info={forecastData}/>
      <Location />
    </div>
  )
}

export default Weather
