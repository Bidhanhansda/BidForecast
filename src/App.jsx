
import './App.css'
import Weatherbox from './components/Weatherbox';
import Detail from './components/Detail';
import Day from './components/Day';
import Search from './components/Search';
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [end, setEnd] = useState("london");
  const [container, setContainer] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9607e7849bmsh388655c8360a2a7p1c7c7cjsnb88ffbbea586',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const formatCurrentWeather = (data) => {
    const {
      location: { country, name, lat, lon, localtime, region },
      current: { temp_c, temp_f, condition: { text, icon }, wind_mph, wind_kph, wind_dir, humidity, feelslike_c, feelslike_f },
      forecast: {
        forecastday

      }
    } = data;

    const {

      day: {
        maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, avgtemp_c, avgtemp_f, condition: { text: detail, icon: img }
      },
      astro: {
        sunrise: sunrise0, sunset: sunset0, moonrise: moonrise0, moonset: moonset0
      }



    } = forecastday[0]

    const {
      date: date1,
      day: {
        maxtemp_c: maxtemp_c1, maxtemp_f: maxtemp_f1, mintemp_c: mintemp_c1, mintemp_f: mintemp_f1, avgtemp_c: avgtemp_c1, avgtemp_f: avgtemp_f1, condition: { text: detail1, icon: img1 }
      },

      astro: {
        sunrise: sunrise1, sunset: sunset1, moonrise: moonrise1, moonset: moonset1
      }
    } = forecastday[1]

    const {
      date: date2,
      day: {
        maxtemp_c: maxtemp_c2, maxtemp_f: maxtemp_f2, mintemp_c: mintemp_c2, mintemp_f: mintemp_f2, avgtemp_c: avgtemp_c2, avgtemp_f: avgtemp_f2, condition: { text: detail2, icon: img2 }
      },

      astro: {
        sunrise: sunrise2, sunset: sunset2, moonrise: moonrise2, moonset: moonset2

      }
    } = forecastday[2]




    return {
      country, name, lat, lon, localtime, region, temp_c, temp_f, text, icon, wind_mph, wind_kph, wind_dir, humidity, feelslike_c, feelslike_f, maxtemp_c, maxtemp_c1, maxtemp_c2, maxtemp_f, maxtemp_f1, maxtemp_f2, mintemp_c, mintemp_c1, mintemp_c2, mintemp_f, mintemp_f1, mintemp_f2, avgtemp_c, avgtemp_c1, avgtemp_c2, avgtemp_f, avgtemp_f1, avgtemp_f2, detail, detail1, detail2, img, img1, img2, sunrise0, sunrise1, sunrise2, sunset0, sunset1, sunset2, moonrise0, moonrise1, moonrise2, moonset0, moonset1, moonset2, date1, date2
    }
  }

  const fetchMe = () => {


    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=+${end}&days=3`, options)
      .then(response => { return response.json() }).then(formatCurrentWeather)
      .then(data => { setContainer(data) })
      .catch(err => console.error(err));
    toast.success(`Successfully fetched weather for ${end}`)
  }

  useEffect(() => {
    const messege = end ? end : "Current location";
    toast.info("Fetching weather for " + " " + messege);
    fetchMe();
  }, [end])





  return (
    <div className=' w-full overflow-hidden '>
      <div className=' w-full h-full sm:px-16 px-6 flex flex-col  items-center justify-center '>
        <h1 className=' headingcolor mt-7 text-[3em] font-rubic'>
          BidForecast
        </h1>

        <div className='newbg
        
         h-fit shadow-xl shadow-gray-400 w-[100%]  my-12 border-2 border-sky-500 rounded-3xl  '>


          <div className=' flex flex-col items-center '>
            <div className='flex items-center justify-center px-10'>
              <Search setEnd={setEnd} />
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-around '>
              <div className='flex flex-col items-center justify-center  xl:mr-12 xl:px-3'>
                <Weatherbox container={container} />
                <Detail container={container} />
              </div>
              <div className='flex flex-col justify-start xl:ml-12 xl:px-3'>
                <Day title="Today"
                  avgTemp_c={container.avgtemp_c}
                  avgTemp_f={container.avgtemp_f}
                  maxTemp_c={container.maxtemp_c}
                  maxTemp_f={container.maxtemp_f}
                  minTemp_c={container.mintemp_f}
                  minTemp_f={container.mintemp_f}
                  day={container.detail}
                  icon={container.img}
                  sunRise={container.sunrise0}
                  sunSet={container.sunset0}
                  moonRise={container.moonrise0}
                  moonSet={container.moonset0}

                />

              </div>


            </div>
            <div className='flex lg:flex-row flex-col justify-around items-center'>
              <div className='flex px-3 xl:mr-10'>
                <Day title={container.date1}

                  avgTemp_c={container.avgtemp_c1}
                  avgTemp_f={container.avgtemp_f1}
                  maxTemp_c={container.maxtemp_c1}
                  maxTemp_f={container.maxtemp_f1}
                  minTemp_c={container.mintemp_f1}
                  minTemp_f={container.mintemp_f1}
                  day={container.detail1}
                  icon={container.img1}
                  sunRise={container.sunrise1}
                  sunSet={container.sunset1}
                  moonRise={container.moonrise1}
                  moonSet={container.moonset1}


                />
              </div>
              <div className='flex px-3 xl:ml-10'>
                <Day title={container.date2}

                  avgTemp_c={container.avgtemp_c2}
                  avgTemp_f={container.avgtemp_f2}
                  maxTemp_c={container.maxtemp_c2}
                  maxTemp_f={container.maxtemp_f2}
                  minTemp_c={container.mintemp_f2}
                  minTemp_f={container.mintemp_f2}
                  day={container.detail2}
                  icon={container.img2}
                  sunRise={container.sunrise2}
                  sunSet={container.sunset2}
                  moonRise={container.moonrise2}
                  moonSet={container.moonset2}
                />
              </div>



            </div>
          </div>


        </div>
      </div>


      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
/>


    </div>


    


  )
}

export default App



