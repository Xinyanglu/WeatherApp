import React from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import NavigationBar from './components/NavigationBar'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            weather: null,
            id: '3e6d983769f060da2be494417af4268c'
        }
    }

    renderWeatherCard(dayNumber){
        let date = new Date()
        return(
            <WeatherCard 
            daysAfter = {dayNumber}
            date = {this.state.weather? date:null}
            icon = {this.state.weather? this.state.weather.daily[dayNumber].weather[0].icon:null}
            dayOfWeek={date.getDay()+dayNumber} 
            morningTemperature={this.state.weather? Math.round(this.state.weather.daily[dayNumber].temp.morn):null}
            dayTemperature={this.state.weather? Math.round(this.state.weather.daily[dayNumber].temp.day):null}
            eveningTemperature={this.state.weather? Math.round(this.state.weather.daily[dayNumber].temp.eve):null}
            nightTemperature={this.state.weather? Math.round(this.state.weather.daily[dayNumber].temp.night):null}
            status={this.state.weather? this.state.weather.daily[dayNumber].weather[0].description:null} />
        )
    }

    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                if(position.coords.latitude){
                    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.state.id}`
                    axios.get(api).then((response) => {
                        this.setState({
                            weather: response.data
                        })
                        
                    }).catch((error) => {
                        console.log(error)
                    })
                }

            })
        }
    }

    render(){
        console.log(this.state.weather)
        console.log(this.state.date)
        return(
            <div className="container-fluid">
                 <NavigationBar/>

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


export default App