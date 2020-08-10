import React from 'react'
import DailyWeather from './components/DailyWeather'
import NavigationBar from './components/NavigationBar'
import axios from 'axios'
import HourlyWeather from './components/HourlyWeather'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import CurrentWeather from './components/CurrentWeather'
import config from './config.js'
import Location from './components/Location'


class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            weather: null,
            weatherid: config.WEATHER_API,
            mapkey: config.MAPS_API,
            locationData: null,
            lat: null,
            long: null,
        }
    }

    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                if(position.coords.latitude){
                    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.state.weatherid}`
                    axios.get(api).then((response) => {
                        this.setState({
                            weather: response.data,
                            lat: position.coords.latitude,
                            long: position.coords.longitude,
                        })
                        if (this.state.lat && this.state.long){
                            let url = `http://open.mapquestapi.com/geocoding/v1/reverse?key=${this.state.mapkey}&location=${this.state.lat},${this.state.long}&includeRoadMetadata=true&includeNearestIntersection=true`
                            axios.get(url).then((response) => {
                                this.setState({
                                    locationData: response.data
                                })
                            }).catch((error) => {
                                console.log(error)
                            })
                        }
                        
                    }).catch((error) => {
                        console.log(error)
                    })
                }

            })
        }
        
        

    }


    render(){
        console.log(this.state.locationData)
        if (this.state.weather && this.state.locationData){
            return(
                <Router>
                    <Switch>
                        <Route path='/daily'>
                            <NavigationBar/>
                            
                            <Location 
                                city={this.state.locationData.results[0].locations[0].adminArea5} 
                                state={this.state.locationData.results[0].locations[0].adminArea3} 
                                country={this.state.locationData.results[0].locations[0].adminArea1}/>

                            <DailyWeather weather={this.state.weather}/>
                        </Route>

                        <Route path="/hourly">
                            <NavigationBar/>

                            <Location 
                                city={this.state.locationData.results[0].locations[0].adminArea5} 
                                state={this.state.locationData.results[0].locations[0].adminArea3} 
                                country={this.state.locationData.results[0].locations[0].adminArea1}/>

                            <HourlyWeather weather={this.state.weather}/>
                        </Route>

                        <Route path="/current">
                            <NavigationBar/>
                            
                            <Location 
                                city={this.state.locationData.results[0].locations[0].adminArea5} 
                                state={this.state.locationData.results[0].locations[0].adminArea3} 
                                country={this.state.locationData.results[0].locations[0].adminArea1}/>

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