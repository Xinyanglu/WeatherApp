import React from 'react'
import './DailyWeatherCard.css'

function WeatherCard(props){
    let icon = props.icon? `http://openweathermap.org/img/wn/${props.icon}@2x.png`:null
    let date = props.date

    if (date){
        date.setDate(date.getDate()+props.daysAfter)
    }

    return (
        <div className="weather-card">
            <h1 className="date">{`${numberToMonth(date.getMonth())} ${date.getDate()}`}</h1>
            <h3 className="day-of-week">{numberToDayOfWeek(date.getDay())}</h3>
            <p className="temperature">Morning: {props.morningTemperature} °C</p>
            <p className="temperature">Day: {props.dayTemperature} °C</p>
            <p className="temperature">Evening: {props.eveningTemperature} °C</p>
            <p className="temperature">Night: {props.nightTemperature} °C</p>
            <h4>{props.status}</h4>
            <img src={icon} alt={props.status}/>
        </div>
    )
}

function numberToDayOfWeek(n){
    let days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
    return (days[n])
}

function numberToMonth(n){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
    return (months[n])
}

export default WeatherCard
