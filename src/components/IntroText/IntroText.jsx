import React from 'react'
import './IntroText.css'
import pray from '../../img/pray.png'
import pray2 from '../../img/pray2.png'


function IntroText() {
  return (
    <div className='IntroText'>
    <img src={pray2} alt="" />
    <div>
    <p> His Holiness Shri Datta Swami is a world-renowned Master of spiritual knowledge. 
    Shri Swami is believed to be a complete incarnation of God Datta by His close devotees. 
    By correlating scriptures of major religions and through logical analysis, Shri Swami explains — 
    "Every religion says that their God created this entire world. Since there is only one world, 
    there should be one God, who must be impartial to all the children in the universe. 
    The same single Unimaginable God revealed Himself in different human forms, 
    in different places across the world and at different times to preach the 
    same spiritual knowledge in different languages and cultures."</p>
    <div className="button o-button">Overview</div>
    </div>
    <img src={pray} alt="" />
    </div>
  )
}

export default IntroText