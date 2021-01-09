import React from 'react'

const CurrentWeather = props => {
    console.log(props.currentWeather)
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
    var pmoram= date.getHours() > 11 ? 'pm' : 'am'
    var icon = `https://openweathermap.org/img/wn/${props.currentWeather.weather[0].icon}@2x.png`
    return(
        <div className="ui segment" >
           <h3>{props.currentWeather.name}</h3>
           <img src={icon}/> {props.currentWeather.main.temp}
        </div>
    )
}
export default CurrentWeather
/*
<h2 class="ui sub header">
  Price    
</h2>
<span>$10.99</span>    <img src={icon} alt="no image"/> 

//<img src={icon} alt="no image"/>

{displayDay() +' '+ time + ' '+pmoram} <br/>
            {props.currentWeather.weather[0].main}


<div class="ui clearing segment">
  <h3 class="ui right floated header">
    Go Forward
  </h3>
  <h3 class="ui left floated header">
    Go Back
  </h3>
</div>

*/