import React from 'react'
import './Card.css'

function Card({emoji,heading,detail}) {
  return (
    <div className="Card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Explore</button>
    </div>
  )
}

export default Card