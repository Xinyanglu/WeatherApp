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

    render(){
        return(
        <h3>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h3>
        )
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

}

export default Clock