import React from 'react'

const CurrentWeather = () => {
  return (
    <div className='bg-air'>
    <p>Temperature</p>
    <h1>20 MAY</h1>
    <h1>11:22 PM</h1>
    <h1>FLAG</h1>
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
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-8">
            </div>
        </div>
    </div>
</div>
  )
}

export default CurrentWeather