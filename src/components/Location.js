import React from 'react'

function Location(props){
    console.log(props)
    return(
        <h1>{props.city}, {props.state}, {props.country}</h1>
    )
}

export default Location