import React from 'react'
import {useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LocationChanger from './LocationChanger'

function HomePage(props){
    const history = useHistory()

    function handleDailyWeather(){
        history.push("/daily")
    }

    function handleHourlyWeather(){
        history.push("/hourly")
    }

    function handleCurrentWeather(){
        history.push("/current")
    }

    return (
        <div className="container-fluid vh-100">
            <div className="row d-flex justify-content-center h-50">
                
                <div className="  align-self-center"> 
                    <h1 className="mb-4 text-center">Weather app</h1>
                    <div className="">
                        <LocationChanger changeDataFunction={props.changeDataFunction} />
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center h-50">

                <div className="col-sm-2 d-flex flex-column ">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleDailyWeather}>
                        See Daily Weather
                    </button>
                </div>

                
                <div className="col-sm-2 d-flex flex-column ">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleHourlyWeather}>
                        See Hourly Weather
                    </button>
                </div>
            

                <div className="col-sm-2 d-flex flex-column ">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleCurrentWeather}>
                        See Current Weather
                    </button>

                </div>

            </div>

        </div>
    )
}

export default HomePage