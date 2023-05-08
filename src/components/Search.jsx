import React, { useState } from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons';

const Search = ({setEnd}) => {

const [city,setCity] = useState("");

const handleSearchClick = () =>{
  if(city !== ""){
    setEnd(city)
  }
 }

 const handleLocationClick = () =>{
  if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition((position) => {
      
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let myLocation = `${lat},${lon}`
      
      setEnd(
        myLocation
      );
    });
  }
 }

  return (
    <div className=' flex justify-center items-center w-[100%] my-6'>
    <div className='flex  justify-between items-center '>
    <input type="text" 
        value={city}
            className=' rounded-lg ml-2 text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
            placeholder='Enter city name....'
            onChange={(e) => setCity(e.currentTarget.value)}
        />
         <UilSearch className=" iconcolor w-16 text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint  className=" iconcolor w-16  text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
        </div>
    </div>
  )
}

export default Search;






