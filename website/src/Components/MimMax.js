import React from 'react'
// shows the minimum temp and max temp
const MimMax = (props) => {
  return (
    <div className='border border-[#9C9191] rounded-3xl m-4 p-4 text-body font-semibold'>
      <p>Feels like {props.feelslike}</p>
      <p>Maximum Temperature : {props.maxtemp}</p>
      <p>Minimum Temperature : {props.mintemp}</p>
    </div>
  )
}

export default MimMax
