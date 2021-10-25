import React from 'react'

const Enemy = (props) => {
    return (
        <div>
            <h1>Enemy name: {props.name} img src = {props.img}</h1>
        </div>
    ) 
}

export default Enemy