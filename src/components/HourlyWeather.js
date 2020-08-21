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
                date = {this.props.weather.hourly[hourNumber].dt + this.props.weather.timezone_offset}
                />
            )
        }
    }

    numberToMonth(n){
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
        return (months[n])
    }

    listOfHours(){
        let today = new Date((this.props.weather.current.dt + this.props.weather.timezone_offset)*1000)
        let tomorrow = new Date()
        tomorrow.setUTCDate(today.getUTCDate()+1)

        let hourData = []
        for (let i=0;i<12;i++){
            if (today.getUTCHours() + i === 24){
                hourData.push(
                    <div className="h3" key={'date'}>{this.numberToMonth(tomorrow.getUTCMonth()) + " " + tomorrow.getUTCDate()}</div>
                    
                    )
            }
            hourData.push(this.renderHourlyWeatherCard(i))
        }
        return hourData
    }
    

    render(){
        let today = new Date((this.props.weather.current.dt + this.props.weather.timezone_offset)*1000)
        return(
            <div>
                <div className="h3">
                    {this.numberToMonth(today.getUTCMonth()) + " " + today.getUTCDate()}
                </div>

                <div className='hourly-weather'>
                    {this.listOfHours()}
                </div>
            </div>
        )
    }
}

export default HourlyWeather