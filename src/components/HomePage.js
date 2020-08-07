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
        <div className="d-flex align-items-center min-vh-100">
            <div className="container">

                <div className="row  text-center">
                    
                    <div className="col-lg">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleDailyWeather}>
                            See Daily Weather
                        </button>
                    </div>

                    <div className="col-lg">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleHourlyWeather}>
                            See Hourly Weather
                        </button>
                    </div>

                    <div className="col-lg">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleCurrentWeather}>
                            See Current Weather
                        </button>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default HomePage