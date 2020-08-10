import React from 'react'

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state={
            time: new Date()
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(), 1000
        )
    }

    setTime(hours,minutes,seconds){
        let h = hours
        let m = minutes
        let s = seconds
        if (hours<10){
            h = "0" + hours
        }
        if (minutes<10){
            m = "0" + minutes
        }
        if (seconds<10){
            s = "0" + seconds
        }
        return(`${h}:${m}:${s}`)
    }

    render(){
        return(
        <h3>{this.setTime(this.state.time.getHours(),this.state.time.getMinutes(),this.state.time.getSeconds())}</h3>
        )
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

}

export default Clock