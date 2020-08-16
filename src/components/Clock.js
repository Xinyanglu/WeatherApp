import React from 'react'

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state={
            time: new Date(new Date().getTime() + this.props.offset*1000)
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
        <h3>{this.setTime(this.state.time.getUTCHours(),this.state.time.getUTCMinutes(),this.state.time.getUTCSeconds())}</h3>
        )
    }

    tick(){
        this.setState({
            time: new Date(this.state.time.getTime()+1000)
        })
    }

}

export default Clock