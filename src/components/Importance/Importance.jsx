import React from 'react'
import './Importance.css'
import swamiveda from '../../img/swami-holding-veda.png'

function Importance() {
  return (
    <div className="Importance">
        <div className="Importance-left">
            <span>Why learning Spiritual Knowledge</span>
            <span>is important?</span>
            <span>Swami Replied:</span>
            <span>
            The knowledge of God avoids crime and corruption in devotee.If individuals are transformed, the society is perfectly peaceful.
            You cannot control crime and corruption by employing controllers.Controllers become criminal and corrupt. No end to your effort.
            Ancient kings supported the propagation of spiritual knowledge. It could control the sin. Crime and corruption are the two halves of
            the sin. You are spending ten times on employing controllers. But,there is no trace of control. Spend a small part of it on scholars
            to propagate spiritual knowledge. The sin is controlled fully
            </span>
            <button className="c-button">Learn more</button>
        </div>
        <div className="Importance-right">
            <img src={swamiveda} alt="" />
        </div>
    </div>
  )
}

export default Importance