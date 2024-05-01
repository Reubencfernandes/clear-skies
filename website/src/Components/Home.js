import React, { useEffect, useState } from 'react'
import Search from './Search'

const Home = () => {
  const [names, setNames] = useState("")
   useEffect( () => {
    fetch("https://clear-skies-production.up.railway.app/GetLocations")  
        .then(response => response.json())  
        .then(data => {
          const locations = data; 
          if (locations.length >= 2) {
            setNames(`${locations[0].Name}, ${locations[1].Name}`);
          } else {
            console.log("Not enough locations received:", locations);
          }
        })
        .catch(error => {
          console.error("Error fetching locations:", error);
        });
  }, []);
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between p-8">
    <div className='flex-1 py-10 mt-10 xl:mx-6'>
        <h1 className='font-head text-5xl xl:text-6xl py-2'>ClearSkies</h1>
        <p className='my-1 text-lg xl:text-xl py-2'>Clear Skies helps you navigate the weather's impact on daily life, from planning outdoor activities to preparing for severe conditions. Access accurate, current weather updates for global locations easily.</p>
        <Search/>
        <p className='font-body py-1 text-sm xl:text-base text-gray-600'>Recent Searches: {names}</p>
    </div>
    <div className='flex-1 hidden xl:block m-5'>
        <img src='https://cdn.midjourney.com/8a583123-8c84-4b1a-92f2-4a57c3517da1/0_0.png' alt='main'/>
    </div>
</div>

  )
}

export default Home