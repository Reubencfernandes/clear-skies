import React from 'react'
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons'
import Flag from 'react-flagkit';
const CurrentWeather = () => {
  return (
    <div className='bg-hm text-white rounded-3xl bg-cover m-4'>
        <div>
        <div>
        <WeatherIcon iconId={200} name="owm" night />
    <p>Temperature</p>
    </div>
    <div>
    <h1>20 MAY</h1>
    <h1>11:22 PM</h1>
    </div>
        </div>
    <Flag country="US" />
    <h1>London</h1>
    <p> -0.1152, 51.5005</p>
    <h1>10°C</h1>
    <p>Broken Clouds</p>
    <div>
        <div>
            <div>
                Good
            </div>
            <div>
                Moderate
            </div>
            <div>
                Hazard
            </div>
        </div>
    </div>
</div>
  )
}

export default CurrentWeather