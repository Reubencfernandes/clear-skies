import React from 'react'
import Search from './Search'
const Home = () => {
  return (
    <div className="flex items-center justify-between">
        <div className='mx-6'>
            <h1 className='font-head text-6xl py-2'>ClearSkies</h1>
            <p className='font-body text-xl py-2'>Clear Skies helps you navigate the weather's impact on daily life, from planning outdoor activities to preparing for severe conditions. Access accurate, current weather updates for global locations easily.</p>
            <Search/>
            <p className='font-body py-1 text-base text-gray-600'>Recent Searches: </p>
        </div>
        <div className='m-5'>
         <img src='https://cdn.midjourney.com/8a583123-8c84-4b1a-92f2-4a57c3517da1/0_0.png' alt='main'/>
        </div>
    </div>
  )
}

export default Home