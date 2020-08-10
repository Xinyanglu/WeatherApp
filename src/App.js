import React from 'react'
import DailyWeather from './components/DailyWeather'
import NavigationBar from './components/NavigationBar'
import axios from 'axios'
import HourlyWeather from './components/HourlyWeather'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import CurrentWeather from './components/CurrentWeather'
import config from './config.js'


class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            weather: null,
            id: config.WEATHER_API
        }
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
        if (this.state.weather){
            return(
                <Router>
                    <Switch>
                        <Route path='/daily'>
                            <NavigationBar/>
                            <DailyWeather weather={this.state.weather}/>
                        </Route>

                        <Route path="/hourly">
                            <NavigationBar/>
                            <HourlyWeather weather={this.state.weather}/>
                        </Route>

                        <Route path="/current">
                            <NavigationBar/>
                            <CurrentWeather weather={this.state.weather}/>
                        </Route>

                        <Route path="/">
                            <HomePage />
                        </Route>
                        
                    </Switch>
                </Router>
            )
        }
        return null
    }
}


export default App