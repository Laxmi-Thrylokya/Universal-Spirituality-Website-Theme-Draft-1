import React from 'react'
import './Mcard.css'

function Mcard({emoji,heading,detail}) {
  return (
    <div className="Mcard">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">Learn more</button>
    </div>
  )
}

export default Mcard