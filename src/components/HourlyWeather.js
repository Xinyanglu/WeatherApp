import React from 'react'
import HourlyWeatherCard from './HourlyWeatherCard'

class HourlyWeather extends React.Component{
    renderHourlyWeatherCard(hourNumber){
        if (this.props){
            return(
                <HourlyWeatherCard
                icon = {this.props.weather.hourly[hourNumber].weather[0].icon}
                status = {this.props.weather.hourly[hourNumber].weather[0].description}
                temperature = {Math.round(this.props.weather.hourly[hourNumber].temp)}
                date = {this.props.weather.hourly[hourNumber].dt}
                />
            )
        }
        
    }

    listOfHours(){
        let hourData = []
        for (let i=0;i<12;i++){
            hourData.push(this.renderHourlyWeatherCard(i))
        }
        return hourData
    }
    

    render(){
        return(
            <div className='hourly-weather'>
                {this.listOfHours()}
            </div>
        )
    }
}

export default HourlyWeather