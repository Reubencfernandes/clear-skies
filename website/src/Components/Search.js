import React, { useState } from 'react';
const Search = () => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
    fetch(`http://localhost:10/Get/${form}`)  
    .then(response => response.json()) 
    .then(data => {
       console.log(data);
      
    })
    .catch(error => {
      console.error("Error fetching locations:", error);
    });
  };

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Location name'
          className='border-black border px-5 py-2 font-body text-xl rounded-md lg:min-w-[500px]'
          value={form}
          onChange={handleChange} 
        />
        <input
          type='submit'
          value='Search'
          className='font-bebas bg-black text-white p-3 px-3 text-xl rounded m-1 lg:ml-4 hover:cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Search;
