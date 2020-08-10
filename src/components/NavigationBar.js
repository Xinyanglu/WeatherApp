import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'


function NavigationBar(){
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Weather app</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="daily">Daily</Nav.Link>
                    <Nav.Link href="hourly">Hourly</Nav.Link>
                    <Nav.Link href="current">Current</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar