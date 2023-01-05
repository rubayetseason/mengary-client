import React from 'react';
import chevron from './images/chevron.svg';
import './Navbar.css';

const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
            <nav className="navbar">
        <button onClick={toggleMenu} className="burger"></button>
        <button className="button">Mengary</button>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="button">
              Services
              <img src={chevron} alt='' />
            </button>
            <div className="dropdown-menu">
              <button>UX/UI Design</button>
              <button>Web Applications</button>
              <button>SEO Advice</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="button">
              Products
              <img src={chevron} alt='' />
            </button>
            <div className="dropdown-menu">
              <button>Learn CSS Ebook</button>
              <button>Security Course</button>
              <button>Masterclass Bundle</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="button">
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