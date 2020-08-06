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

    numberToMonth(n){
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
        return (months[n])
    }

    listOfHours(){
        let today = new Date()
        let tomorrow = new Date()
        tomorrow.setDate(today.getDate()+1)

        let hourData = []
        for (let i=0;i<12;i++){
            if (today.getHours() + i === 24){
                hourData.push(
                    <div className="h3">{this.numberToMonth(tomorrow.getMonth()) + " " + tomorrow.getDate()}</div>
                    
                    )
            }
            hourData.push(this.renderHourlyWeatherCard(i))
        }
        return hourData
    }
    

    render(){
        return(
            <div>
                <div className="h3">
                    {this.numberToMonth(new Date().getMonth()) + " " + new Date().getDate()}
                </div>

                <div className='hourly-weather'>
                    {this.listOfHours()}
                </div>
            </div>
        )
    }
}

export default HourlyWeather