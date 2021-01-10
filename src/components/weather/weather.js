import React from 'react'
import '../../styles/weather.css'
import CurrentWeather from './currentWeather'
import WeeklyWeather from './weeklyWeather'

const Weather = props => {
   return(
       <div className=" ui centered segment " id ="theweather">
         <CurrentWeather currentWeather={props.currentWeather}/>
         <WeeklyWeather weeklyWeather={props.weeklyWeather}/>
       </div>
   )
}
export default Weather
