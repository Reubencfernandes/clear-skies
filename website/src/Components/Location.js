import React, { useEffect, useState } from 'react';
import Flag from 'react-flagkit';

const Location = () => {
  const [loc, setLoc] = useState([]);
  
  useEffect(() => {
    fetch(`https://clear-skies-production.up.railway.app/sort`)
      .then(response => response.json())
      .then(data => {
        setLoc(data);
      })
      .catch(error => console.error('Error fetching location data:', error));
  }, []);
  
  return (
    <>
      <div>
        <h1 className='font-body text-3xl font-semibold ml-3'>Most Searched Location</h1>
      </div>
      <div className='flex flex-wrap'>
      {loc.map((index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
            <div className='border border-[#878787] rounded-xl text-black bg-location  m-3 p-8'>
              <div className='flex justify-between'>
                <h1 className='font-bebas text-3xl'>{index.Name}</h1>
                <Flag className='ml-5' country={index.Country}/>
              </div>
              <h1 className='font-bebas text-3xl'>{Math.trunc(index.Temperature-273.15)}°C</h1>
              <p className='font-body font-semibold'>{index.Climate_Info}</p>
            </div>
          </div>
        ))}
      
      </div>
      
    </>
  );
};

export default Location;
