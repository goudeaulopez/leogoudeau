import React from 'react'
import '../../styles/weather.css'

const Weather = props => {
    var date = new Date();
    var day = date.getDay()
    var displayDay = () => {
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
    var time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    var description = () =>{
        switch(props.weather[0].description){
            case 'broken clouds':
                return 'Partly cloudy'
            case 'scattered clouds':
                return 'Partly cloudy'
            default:
                return 'Cloudy'
        }
    }
  // var icon = `https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`

    const temp = props.cf ? Math.round(props.main.temp -273.15) : props.main.temp
    var pmoram= date.getHours() > 11 ? 'pm' : 'am'
    return(
        <div className="ui segment" id="currentweather">
            <h3 className="pl-2">{props.city}</h3>
            <p>{displayDay() +' '+ time+' '+pmoram}</p>
            <p>  {description()}</p>
             <div style={{display:'flex'}}>
            <h3>{temp}</h3>
             <a className="ml-2" onClick={()=>props.setCF(true)}>C</a> | <a onClick={()=>props.setCF(false)}>F</a>
             </div>
             
            
          
           
           
        </div>
    )
}
export default Weather

// <img src={icon} alt={props.weather[0].description} style={{fontSize:'24px', width:'50px',height:'50px',marginRight:'10px'}}/>
             