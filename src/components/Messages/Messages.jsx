import React from 'react'
import './Messages.css'
import Mcard from '../Mcard/Mcard'
import swamiveda from '../../img/swami-holding-veda.png'
import wps from '../../img/wps.png'
import swamiflowers from '../../img/swamiflowers.png'

function Messages() {
  return (
    <div className="Messages">
              {/* left side */}
      <div className="awesome">
         <span>Messages</span>
         <span>given by Swami</span>
         <span>
          Swami has given wonderful spiritual messages 
          <br />
          to enlighten the humanity.
          <br />
          The messages include
          </span>
          <ul>
            <li> Permanent Solution to Corona Pandemic</li>
            <li> World Peace and Removal of Terrorism </li>
          </ul>

         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="m-cards">
            <div className="m-card" style={{left: '30rem'}}>
            <Mcard
            emoji={wps}
            heading={"Message to the World"}
            detail={"Swami speaks at 1st World Parliament on Sprituality, Hyderabad, India, 2012"}
          />
            </div>
          
  
        {/* second card */}
            <div className="m-card"  style={{top: '10rem' , left: '7em'}}>
            <Mcard
            emoji={swamiveda}
            heading={"Swami's Philosophy"}
            detail={"Philosophy about the God, the soul and the Path to get the grace of God."}
          />
            </div>


        {/* 3rd */}
        <div className="m-card" style={{top: '22rem' , left: '26rem'}}>
          <Mcard
            emoji={swamiflowers}
            heading={"Message to all Priests"}
            detail={"Swami guides the priests to enhance devotion towards God"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

      </div>
    </div>
  )
}

export default Messages