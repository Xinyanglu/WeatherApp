import React from 'react'
import WeatherCard from './DailyWeatherCard.js'


class DailyWeather extends React.Component{

    renderWeatherCard(dayNumber){
        let date = new Date()
        return(
            <WeatherCard 
            daysAfter = {dayNumber}
            date = {date}
            icon = {this.props.weather.daily[dayNumber].weather[0].icon}
            dayOfWeek={date.getDay()+dayNumber} 
            morningTemperature={Math.round(this.props.weather.daily[dayNumber].temp.morn)}
            dayTemperature={Math.round(this.props.weather.daily[dayNumber].temp.day)}
            eveningTemperature={Math.round(this.props.weather.daily[dayNumber].temp.eve)}
            nightTemperature={Math.round(this.props.weather.daily[dayNumber].temp.night)}
            status={this.props.weather.daily[dayNumber].weather[0].description} />
        )
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">

                    <div className="col-sm">
                        <div className="today">
                            {this.renderWeatherCard(0)}
                        </div>
                    </div>
                    
                    <div className="col-sm">
                        {this.renderWeatherCard(1)}
                    </div>
                    
                    <div className="col-sm">
                        {this.renderWeatherCard(2)}
                    </div>

                    <div className="col-sm">
                        {this.renderWeatherCard(3)}
                    </div>

                    <div className="col-sm">
                        {this.renderWeatherCard(4)}
                    </div>
                </div>
            </div>
        )
    }
}

export default DailyWeather
