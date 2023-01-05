import React from 'react';
import chevron from './images/chevron.svg';
import './Navbar.css';
import mengary from './images/logo.jpg';

const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
            <nav className="navbar px-4">
        <button onClick={toggleMenu} className="burger"></button>
        <img src={mengary} className='logo' alt="" />
        <button className="button mengary">Mengary</button>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="button">
              Home
            </button>
          </div>
          <div className="dropdown">
            <button className="button">
              Products
            </button>
          </div>
          <div className="dropdown">
            <button className="button">
             Categories
              <img src={chevron} alt='' />
            </button>
            <div className="dropdown-menu">
              <button>Live Chat</button>
              <button>Send Email</button>
              <button>Request Help</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="button">
             Login
            </button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;