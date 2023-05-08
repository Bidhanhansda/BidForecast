import React from 'react'
import { weathercock } from '../assets'

const Detail = (
  { container: { lat, lon, wind_mph, wind_kph, wind_dir
  } }
) => {
  return (
    <div className='flex flex-col mb-8 object-contain p-2 bg-gradient-to-b from-white to-blue-300 h-fit shadow-xl shadow-gray-400 w-[100%] border-white border-4 rounded-3xl font-bold newtxt '>
      <div className='flex justify-between py-4 px-2'>
        <p className=' rounded-lg shadow-xl shadow-blue-300'>{`latitude : ${lat}`}</p>
        <p className=' rounded-lg shadow-xl shadow-blue-300 ml-2'>{`longitude : ${lon}`}</p>
      </div>
      <div className='flex justify-center items-center'>
        <img src={weathercock} alt='weather-img'
          className=' rounded-full w-20 shadow-xl shadow-blue-500'
        />
      </div>
      <div className='flex md:flex-row flex-col justify-between py-4 px-2'>
        <div className=' flex flex-col justify-center items-center mb-3'>
          <p className=' border-b-2 shadow-xl shadow-blue-400 border-blue-400'>Wind_mph</p>
          <p>{`${wind_mph} m/h`}</p>
        </div>
        <div className=' flex flex-col justify-center items-center mb-3'>
          <p className=' border-b-2 shadow-xl shadow-blue-400 border-blue-400'>Wind_kmh</p>
          <p>{`${wind_kph} km/h`}</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <p className=' border-b-2 shadow-xl shadow-blue-400 border-blue-400'>Wind_dir</p>
          <p>{`${wind_dir}`}</p>
        </div>

      </div>
    </div>
  )
}

export default Detail