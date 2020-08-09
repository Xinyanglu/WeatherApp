import React from 'react'
import {useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function HomePage(){
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
            <h1 className="d-flex justify-content-center h-25 align-items-end mb-0">Weather app</h1>
            <div className="row d-flex justify-content-center h-75">

                <div className="col-sm-2 d-flex flex-column align-self-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleDailyWeather}>
                        See Daily Weather
                    </button>
                </div>

                
                <div className="col-sm-2 d-flex flex-column align-self-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleHourlyWeather}>
                        See Hourly Weather
                    </button>
                </div>
            

                <div className="col-sm-2 d-flex flex-column align-self-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleCurrentWeather}>
                        See Current Weather
                    </button>

                </div>

            </div>

        </div>
    )
}

export default HomePage