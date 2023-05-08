import React from 'react'
import { drizzle, moon, sunrise, sunset } from '../assets';

const Day = (props) => {

  let image = `https:${props.icon}`
  
  return (
    <div className=' newtxt flex flex-col mb-8 object-contain p-2 bg-gradient-to-b from-white to-blue-300 h-fit shadow-xl shadow-gray-400 w-[100%] border-white border-4 rounded-3xl font-bold  '>
      <div className='flex items-start p-3'>
        <h3 className='text-2xl  font-bold pb-2 rounded-2xl shadow-xl shadow-blue-500 p-3 mb-8'>{`${props.title}`}</h3>
      </div>

      <div className='flex justify-around'>

        <div className='flex flex-col justify-center items-start '>
          <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-2 text-lg rounded-xl p-2'>{`Avg-Temp: ${props.avgTemp_c}°C/${props.avgTemp_f}°F`}</p>
          <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-2 text-lg rounded-xl p-2'>{`Max-Temp: ${props.maxTemp_c}°C/${props.maxTemp_f}°F`}</p>
          <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-2 text-lg rounded-xl p-2'>{`Min-Temp: ${props.minTemp_c}°C/${props.minTemp_f}°F`}</p>
        </div>

        <div className=' flex flex-col ml-4 items-center '>
          <p className='text-2xl text-blue-900 font-bold pb-2 rounded-2xl shadow-xl shadow-blue-500 p-3 mb-8'>{props.day}</p>
          <img src={image} alt='weather-img'
            className=' bounce-top transition ease-in rounded-full w-20 shadow-xl shadow-blue-500 p-2'
          />

        </div>

      </div>

      <div className='flex items-center justify-center  mt-5 overflow-hidden md:flex-row flex-col'>
      <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center m-3'>
          <p className=' border-b-2 shadow-xl shadow-gray-400 border-blue-400 p-2 rounded-xl'>Sunrise</p>

          <img src={sunrise} alt='weather-img'
            className=' rounded-full w-20 shadow-xl shadow-gray-400 my-2'
          />

          <p className=' shadow-xl shadow-gray-500 border-blue-400 mt-3 rounded-2xl p-2'>{`${props.sunRise}`}</p>
        </div>

        <div className='flex flex-col items-center justify-center m-3'>
          <p className=' border-b-2 shadow-xl shadow-gray-700 border-blue-400 p-2 rounded-xl'>Sunset</p>

          <img src={sunset} alt='weather-img'
            className=' rounded-full w-20 shadow-xl shadow-blue-900 my-2'
          />

          <p className=' shadow-xl shadow-gray-700 border-blue-400 mt-3 rounded-2xl p-2'>{`${props.sunSet}`}</p>
        </div>
      </div>

      <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center m-3'>
          <p className=' border-b-2 shadow-xl shadow-gray-400  border-blue-400 p-2 rounded-xl'>Moonrise</p>

          <img src={moon} alt='weather-img'
            className=' rounded-full w-20 shadow-xl shadow-gray-400  my-2'
          />

          <p className=' shadow-xl shadow-gray-500  border-blue-400 mt-3 rounded-2xl p-2'>{`${props.moonRise}`}</p>
        </div>

        <div className='flex flex-col items-center justify-center m-3'>
          <p className=' border-b-2 shadow-xl shadow-gray-700 border-blue-400 p-2 rounded-xl'>Moonset</p>

          <img src={moon} alt='weather-img'
            className=' rounded-full w-20 shadow-xl shadow-gray-700  my-2'
          />

          <p className=' shadow-xl shadow-gray-700  border-blue-400 mt-3 rounded-b-2xl p-2'>{`${props.moonSet}`}</p>
        </div>

      </div>
        

        


      </div>

    </div>
  )
}

export default Day;