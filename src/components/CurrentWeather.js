import React from 'react'
import "./CurrentWeather.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function CurrentWeather(props){

    function numberToMonth(n){
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
        return (months[n])
    }

    function numberToDayOfWeek(n){
        let days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
        return (days[n])
    }


    let date = new Date()
    let icon = `http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`

    return(
        <div className="container-fluid">
            <div className="row justify-content-center current-weather">
                <div className="col-xl-2">
                    <h1>{numberToDayOfWeek(date.getDay())}</h1>
                    <h2>{numberToMonth(date.getMonth()) + " " + date.getDate()}</h2>
                    <img src={icon}/>
                </div>

                <div className="col-xl-2 info">
                    <h3>Temperature: {Math.round(props.weather.current.temp) + " °C"}</h3>
                    <h3>Feels like: {Math.round(props.weather.current.feels_like) + " °C"}</h3>
                    <h3>Humidity: {props.weather.current.humidity}%</h3>
                    <h2>{props.weather.current.weather[0].description}</h2>


                </div>
                
            </div>
        </div>
    )
}


export default CurrentWeather