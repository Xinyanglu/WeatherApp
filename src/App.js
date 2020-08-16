import React from 'react'
import DailyWeather from './components/DailyWeather'
import NavigationBar from './components/NavigationBar'
import axios from 'axios'
import HourlyWeather from './components/HourlyWeather'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import CurrentWeather from './components/CurrentWeather'
import config from './config.js'
import Location from './components/Location'
import LocationChanger from './components/LocationChanger'

class App extends React.Component {

    constructor(props) {
        console.log("construct")
        super(props)
        this.state = {
            weather: null,
            weatherid: config.WEATHER_API,
            mapkey: config.MAPS_API,
            locationData: null,
            lat: null,
            long: null,
        }

        this.getDataWithAddress = this.getDataWithAddress.bind(this)
    }

    getDataWithCoords(lat, long) {
        console.log("coords")
        let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${this.state.weatherid}`
        axios.get(api).then((response) => {
            this.setState({
                weather: response.data,
                lat: lat,
                long: long,
            })
            if (this.state.lat && this.state.long) {
                let url = `http://open.mapquestapi.com/geocoding/v1/reverse?key=${this.state.mapkey}&location=${this.state.lat},${this.state.long}&includeRoadMetadata=true&includeNearestIntersection=true`
                axios.get(url).then((response) => {
                    this.setState({
                        locationData: response.data,
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    getDataWithAddress(address) {
        console.log("address")
        let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${this.state.mapkey}&location=${address}`
        axios.get(url).then((response) => {
            this.setState({
                locationData: response.data,
                lat: response.data.results[0].locations[0].latLng.lat,
                long: response.data.results[0].locations[0].latLng.lng,
            })

            let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&units=metric&appid=${this.state.weatherid}`
            axios.get(api).then((response) => {
                this.setState({
                    weather: response.data,
                })

            }).catch((error) => { console.log(error) })

        }).catch((error) => { console.log(error) })
    }

    componentDidMount() {
        console.log("mount")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position.coords.latitude && position.coords.longitude) {
                    this.getDataWithCoords(position.coords.latitude, position.coords.longitude)
                }
            })
        }
    }

    render() {
        console.log("render")
        if (this.state.weather && this.state.locationData) {
            console.log(this.state.weather)
            return (
                <Router>
                    <Switch>
                        <Route path='/daily'>
                            <NavigationBar />

                            <Location
                                city={this.state.locationData.results[0].locations[0].adminArea5}
                                state={this.state.locationData.results[0].locations[0].adminArea3}
                                country={this.state.locationData.results[0].locations[0].adminArea1} />

                            <DailyWeather weather={this.state.weather} />
                        </Route>

                        <Route path="/hourly">
                            <NavigationBar />

                            <Location
                                city={this.state.locationData.results[0].locations[0].adminArea5}
                                state={this.state.locationData.results[0].locations[0].adminArea3}
                                country={this.state.locationData.results[0].locations[0].adminArea1} />

                            <HourlyWeather weather={this.state.weather} />
                        </Route>

                        <Route path="/current">
                            <NavigationBar />

                            <Location
                                city={this.state.locationData.results[0].locations[0].adminArea5}
                                state={this.state.locationData.results[0].locations[0].adminArea3}
                                country={this.state.locationData.results[0].locations[0].adminArea1} />

                            <CurrentWeather weather={this.state.weather} />
                        </Route>

                        <Route path="/">
                            <LocationChanger changeDataFunction={this.getDataWithAddress} />
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