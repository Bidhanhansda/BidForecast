import React from 'react'
import { fahrenheit,celsius } from '../assets';

const Weatherbox = ({container:{country,name,localtime,region,temp_c,temp_f,text,feelslike_c,feelslike_f,humidity,lat,lon
}}) => {
    
    let link = `https://weather.com/en-IN/weather/today/l/${lat},${lon}?par=google`
    
    return (
        <div className='flex mb-6 object-contain p-2 bg-gradient-to-b from-white to-blue-300 h-fit shadow-xl shadow-gray-400 w-[100%] border-white border-4 rounded-3xl '>
            <div className=' flex md:flex-row flex-col justify-between items-center pl-3'>
                <div className='flex flex-col justify-between px-2 mb-4 newtxt'>
                    <p className=' text-2xl  font-bold pb-2 rounded-2xl shadow-xl shadow-blue-500 p-3 mb-8'>{name}</p>
                    <p className=' text-xl font-bold pb-2  items-center justify-center rounded-2xl shadow-xl shadow-blue-500 p-3 mb-8'>{country}</p>
                    <div className='flex flex-col items-center justify-center'>
                    
                    <div className=' flex items-center justify-center'>
                    <p className=' jello-vertical text-4xl  font-bold pb-2 rounded-full bg-white shadow-xl shadow-blue-500 p-3 mb-8'>{`${Math.floor(temp_c)}`}</p>
                    <img src={celsius} alt='weather-img'
                    className=' rounded-full w-20  shadow-xl shadow-blue-500 p-2'
                    />

                    </div>
                    <div className=' flex items-center justify-center'>
                    <p className=' jello-vertical text-4xl  font-bold pb-2 rounded-full bg-white shadow-xl shadow-blue-500 p-3 mb-8'>{`${Math.floor(temp_f)}`}</p>
                    <img src={fahrenheit} alt='weather-img'
                    className=' rounded-full w-20  shadow-xl shadow-blue-500 p-2'
                    />
                    </div>


                    
                    
                    </div>
                    

                </div>
                <div className=' newtxt flex flex-col justify-start pl-6 font-bold  px-4'>
                    <p className='text-2xl  font-bold pb-2 rounded-2xl shadow-xl shadow-blue-500 p-3 mb-8'>{localtime}</p>
                    
                    <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-2'>{region}</p>
                    <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-3'>{text}</p>
                    
                    <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-3'> 
                    {`RealFeel ${Math.floor(feelslike_c)}°C / ${Math.floor(feelslike_f)}°F`}
                    </p>
                    <p className='border-b-2 shadow-xl shadow-blue-400 border-blue-400 mt-3'>{`Humidity ${humidity}%`}</p>
                    <button className=' bg-blue-900 text-white hover:scale-110 transition ease-out rounded-2xl my-3 shadow-xl shadow-blue-800 '>
                    
                    <a href={link} target="_blank">More..</a> </button>
                </div>
            </div>
        </div>
    )
}

export default Weatherbox;