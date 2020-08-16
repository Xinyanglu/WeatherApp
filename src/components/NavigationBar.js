import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


function NavigationBar(){
    const history = useHistory()

    const handleSelect = (eventKey) => {history.push(`${eventKey}`)}

    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Weather app</Navbar.Brand>
                <Nav className="mr-auto"  onSelect={handleSelect}>
                    <Nav.Link eventKey="/daily">Daily</Nav.Link>
                    <Nav.Link eventKey="/hourly">Hourly</Nav.Link>
                    <Nav.Link eventKey="/current">Current</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar