import React from 'react'

const Hero = (props) => {
    return (
        <div>
            <h1>Hero name: {props.name} img src = {props.img}</h1>
        </div>
    ) 
}

export default Hero