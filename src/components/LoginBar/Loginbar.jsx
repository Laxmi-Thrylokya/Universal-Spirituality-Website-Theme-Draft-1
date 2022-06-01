import React from "react";
import "./Loginbar.css";
import user from '../../img/user.png'
function Loginbar() {
  return (
    <div className="Loginbar">
      <div className="loginbar__item">Login</div>
      <div className="loginbar__item">Sign Up</div>
      <img src={user} alt="" /> 
    </div>
  );
}

export default Loginbar;
