import React, { useEffect, useState } from 'react'
import Search from './Search'

const Home = () => {
  const [names, setNames] = useState("")
   useEffect( () => {
    fetch("http://localhost:80/GetLocations")  
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
    <div className="mt-10 p-8 block xl:flex xl:items-center xl:justify-between">
        <div className=' py-10 mt-10 xl:mx-6'>
            <h1 className='font-head text-6xl py-2'>ClearSkies</h1>
            <p className='my-1 xl:font-body text-xl xl:py-2'>Clear Skies helps you navigate the weather's impact on daily life, from planning outdoor activities to preparing for severe conditions. Access accurate, current weather updates for global locations easily.</p>
            <Search/>
            <p className='font-body py-1 text-base text-gray-600'>Recent Searches: {names}</p>
        </div>
        <div className='hidden xl:block xl:m-5'>
         <img src='https://cdn.midjourney.com/8a583123-8c84-4b1a-92f2-4a57c3517da1/0_0.png' alt='main'/>
        </div>
    </div>
  )
}

export default Home