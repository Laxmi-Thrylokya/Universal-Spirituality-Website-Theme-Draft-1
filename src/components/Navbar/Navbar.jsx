import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">His Holiness Shri Datta Swami</div>
      </div>
      <div className="n-right">
        <div className="n-list">
            <div className='navbar__item'>Home</div>
            <div className='navbar__item'>What's New</div>
            <div className='navbar__item'>Swami</div>
            <div className='navbar__item'>Teachings</div>
            <div className='navbar__item'>Books</div>
            <div className='navbar__item'>Gallery</div>
            <div className='navbar__item'>Contact</div>
        </div>
        <button className="button n-button">Search</button>
      </div>
    </div>
  );
}

export default Navbar;
