import React from 'react'
import DailyWeather from './components/DailyWeather'
import NavigationBar from './components/NavigationBar'
import axios from 'axios'


class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            weather: null,
            id: '3e6d983769f060da2be494417af4268c'
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
        return(

            <div>
                <NavigationBar />
                <DailyWeather weather={this.state.weather}/>
            </div>
        )
    }
}


export default App