import React from 'react'
import './Intro.css'
import collage from '../../img/collage-all-incarnations.gif'
import Datta from '../../img/Lord-Dattatreya.png'

function Intro() {
  return (
    <div className="Intro">
        <div className="i-left">
            <div className="collage"><img src={collage} alt="" /></div>
            <div>Swami decorated by devotees as above all</div>
        </div>
        <div className="i-name">
                <div className="i-name1"> Universal Spirituality</div>
                <div className="i-name2"> for </div>
                <div className="i-name3">World Peace </div>
                <div className="i-name4">by</div>
                {/* <div className="i-name5">Shri Datta Swami</div> */}
                <div className="button n-button">Shri Datta Swami</div>
        </div>
        <div className="i-right">
            <div className="Datta"><img src={Datta} alt="" /></div>
            <span>Swami decorated by devotees as Lord Dattātreya</span>
        </div>
    </div>
  )
}

export default Intro