import React from 'react'

const Air = () => {
  return (
    <div className='bg-air'>
        <p>Air Quality</p>
        <p>AQI</p>
        <h1>784</h1>
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

export default Air