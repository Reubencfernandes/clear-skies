import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  let navigate = useNavigate();

  function redirect() {
    navigate('/');  // Navigates to the home page
  }
  return (
    <div class="flex items-center justify-between">
    <div class='p-8 mx-8'>
    <p class="tracking-wide text-7xl text-rose-500 font-semibold font-bebas ">404</p>
        <p class="text-4xl text-slate-800 font-bold p-1">Page Not Found</p>
        <p class="mt-2 text-slate-500">Couldnt find the page you were looking for</p>
        <button class='my-2 hover px-4 py-2 text-sm rounded-lg transition-all text-rose-500 font-semibold border border-rose-200 hover:text-white hover:bg-rose-600 hover:border-transparent hover:rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2' onClick={redirect}>Go Home</button>
      </div>
      <div>
        <img class="hidden md:h-screen md:block md:object-cover" src="https://cdn.midjourney.com/6f62d82d-92d7-4d46-8337-d7ad63cfc677/0_2.png" alt="Train"/>
      </div>
    </div>
  )
}

export default Error