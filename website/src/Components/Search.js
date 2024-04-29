import React from 'react'

const Search = () => {
  return (
    <div className='searchbar'>
        <form>
            <input type='text' placeholder='Enter Location name' className='border-black border px-5 py-2 font-body text-xl rounded-md min-w-[500px]'/>
            <input type='submit' value={'Search'} onSubmit={()=>console.log('HI')}className='font-bebas bg-black text-white p-3 px-3 text-xl rounded m-1 ml-4  hover:cursor-pointer'/>
        </form>
    </div>
  )
}

export default Search