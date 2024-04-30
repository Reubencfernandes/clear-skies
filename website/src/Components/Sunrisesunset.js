import React from 'react'

const Sunrisesunset = (props) => {
  return (
    <div className='rounded-3xl m-4 font-body p-4 border border-[#9C9191]'>
       <div className='flex text-black font-semibold justify-between pb-2'>
           <div> <p>Sunrise</p><p>{props.sunrise}</p></div>
           <div> <p>Sunset</p><p>{props.sunset}</p></div>
       </div>
       <div className="w-full bg-gray-200 rounded-full h-2.5 ">
           <div className="bg-[#B04043] h-2.5 rounded-full w-20">
           </div>
   </div>
</div>
  )
}

export default Sunrisesunset