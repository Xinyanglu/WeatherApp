import React from 'react'
import WeatherCard from './DailyWeatherCard.js'


class DailyWeather extends React.Component{

    renderWeatherCard(dayNumber){
        let date = new Date()
        return(
            <WeatherCard 
            daysAfter = {dayNumber}
            date = {this.props.weather? date:null}
            icon = {this.props.weather? this.props.weather.daily[dayNumber].weather[0].icon:null}
            dayOfWeek={date.getDay()+dayNumber} 
            morningTemperature={this.props.weather? Math.round(this.props.weather.daily[dayNumber].temp.morn):null}
            dayTemperature={this.props.weather? Math.round(this.props.weather.daily[dayNumber].temp.day):null}
            eveningTemperature={this.props.weather? Math.round(this.props.weather.daily[dayNumber].temp.eve):null}
            nightTemperature={this.props.weather? Math.round(this.props.weather.daily[dayNumber].temp.night):null}
            status={this.props.weather? this.props.weather.daily[dayNumber].weather[0].description:null} />
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
