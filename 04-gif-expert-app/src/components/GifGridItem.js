import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div className="card animate__animated animate__swing animate__delay-2s">
            <img src={url} alt={ title }></img>
            <h3>{title}</h3>
        </div>
    )
}


