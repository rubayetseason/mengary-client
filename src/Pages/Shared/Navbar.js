import React from 'react';
import chevron from './images/chevron.svg';
import './Navbar.css';
import mengary from './images/logo.jpg';
import { BsMinecart } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const toggleMenu = () => document.body.classList.toggle("open");
    return (
            <nav className="navbar px-4">
        <button onClick={toggleMenu} className="burger"></button>
        <img src={mengary} className='logo' alt="" />
        <button className="button mengary">Mengary</button>
        <div className="dropdowns">
          <div className="dropdown">
            <Link to='/'>
            <button onClick={toggleMenu} className="button">
              Home
            </button>
            </Link>
          </div>
          <div className="dropdown">
         <Link to='/allproducts'>
         <button onClick={toggleMenu} className="button">
              Products
            </button></Link>
          </div>
          <div className="dropdown">
            <button className="button">
             Categories
              <img src={chevron} alt='' />
            </button>
            <div className="dropdown-menu">
              <button>Football & Jersey</button>
              <button>Sweater & Sweatshirts</button>
              <button>Pants & Trousers</button>
              <button>Sneakers & Sandals</button>
            </div>
          </div>
          <div className="dropdown">
            <button className="button btn glass rounded-none"><BsMinecart className='text-lg'/>&nbsp;Cart
            </button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;