import React from 'react'

const WeeklyWeather = props => {
    console.log(props.weeklyWeather)

    const date = new Date();
    return(
        <div>
          WeeklyWeather
          <p style={{color:'red'}}>Still working on it</p>
          <p>{date.toLocaleDateString()}</p>
          <p></p>
        </div>
    )
}
export default WeeklyWeather

//dtA.getTime(); => 1193855400000}
//dtB.getTime(); => 1193855400000