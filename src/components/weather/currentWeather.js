import React from 'react'

const CurrentWeather = props => {
    console.log(props.currentWeather)
    const date = new Date();
    const day = date.getDay()
    const displayDay = () => {
            switch(day){
            case 1:
                return 'Monday'
            case 2:
                return 'Tuesday'
            case 3:
                return 'Wednesday'
            case 4:
                return 'Thursday'
            case 5:
                    return 'Friday'
            case 6:
                    return 'Saturday'
            default :
                    return 'Sunday'
            }
        }
    const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const pmoram= date.getHours() > 11 ? 'pm' : 'am'
    const icon =`https://openweathermap.org/img/wn/${props.currentWeather.weather[0].icon}@2x.png`

    const displayCondition = () => {
        switch(props.currentWeather.weather[0].description){
            case 'clear sky':
                return 'Sunny'
            case 'few clouds':
                 return 'Mostly Sunny'
            case 'scattered clouds':
                return 'Cloudy'
            case 'broken clouds':
                return 'Cloudy'
            case 'shower rain':
                return 'Rain'
            case 'thunderstorm':
                return 'Thunderstorm'
            case 'thunderstorm':
                return 'Thunderstorm'
            case 'mist':
                return 'Misty'
            case 'haze':
                return 'Haze'
            default:
                return 'Snow'

        }
        
    }
    return(
        <div  >
           <h2 className="ui header">{props.currentWeather.name}
           <div className="sub header">
              {displayDay() +' '+ time + ' '+pmoram}<br/>
              {displayCondition() }
           </div>
           </h2>
           <h1 className="ui header">
               <img src={icon} alt="image"/>
               <div className="content">
                 {Math.round(props.currentWeather.main.temp -273.15)}&#8451;
               </div>
            </h1>     
           
        </div>
    )
}
export default CurrentWeather

