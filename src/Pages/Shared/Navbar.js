import React from "react";
import chevron from "./images/chevron.svg";
import "./Navbar.css";
import mengary from "./images/logo.jpg";
import { BsMinecart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => document.body.classList.toggle("open");
  return (
    <nav className="navbar px-4 max-w-[1440px] mx-auto">
      <button onClick={toggleMenu} className="burger"></button>
      <img src={mengary} className="logo" alt="" />
      <button className="button mengary">Mengary</button>
      <div className="dropdowns">
        <div className="dropdown">
          <Link to="/">
            <button onClick={toggleMenu} className="button">
              Home
            </button>
          </Link>
        </div>
        <div className="dropdown">
          <Link to="/allproducts">
            <button onClick={toggleMenu} className="button">
              All Products
            </button>
          </Link>
        </div>
        <div className="dropdown">
          <button className="button">
            Categories
            <img src={chevron} alt="" />
          </button>
          <div className="dropdown-menu">
            <button>Football & Jersey</button>
            <button>Sneakers & Shoes</button>
            <button>Mens' Clothings</button>
            <button>Pants</button>
            <button>Bags</button>
            <button>Caps and Hats</button>
            <button>Bottles</button>
            <button>Accessories</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="button cart-btn rounded-none">
            <BsMinecart className="text-lg" />
            &nbsp;Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
