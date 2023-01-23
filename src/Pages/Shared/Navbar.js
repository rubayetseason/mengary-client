import React from 'react';
import './Navbar.css';
import chevron from './images/chevron.svg';

const Navbar = () => {

    const toggleMenu = () => document.body.classList.toggle("open");

    return (
        <nav className="navbar">
        <button onClick={toggleMenu} className="burger"></button>
        <button className="navBtn">Home</button>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="navBtn">
              Support
              <img src={chevron} alt='' />
            </button>
            <div className="dropdown-menu">
              <button>Live Chat</button>
              <button>Send Email</button>
              <button>Request Help</button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;