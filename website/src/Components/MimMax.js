import React from 'react'
// shows the minimum temp and max temp
const MimMax = (props) => {
  return (
    <div className='border border-[#9C9191] rounded-3xl m-4 p-4 text-body font-semibold'>
      <p>Feels like {props.feelslike}°C</p>
      <p>Maximum Temperature : {props.maxtemp}°C</p>
      <p>Minimum Temperature : {props.mintemp}°C</p>
    </div>
  )
}

export default MimMax
