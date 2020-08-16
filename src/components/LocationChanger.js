import React from 'react'

class LocationChanger extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: "",
        }
        this.changeLocation = this.changeLocation.bind(this)
        this.changeData = this.changeData.bind(this)
    }

    changeLocation(event) {
        this.setState({
            location: event.target.value
        })
    }

    changeData(event){
        this.props.changeDataFunction(this.state.location)
        this.setState({location: ""})
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.changeData}>
                <label>
                    Location:
                        <input type='text' value={this.state.location} onChange={this.changeLocation} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default LocationChanger