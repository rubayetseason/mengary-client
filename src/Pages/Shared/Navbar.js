import React from "react";
import "./Navbar.css";
import chevron from "./images/chevron.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => document.body.classList.toggle("open");

  return (
    <nav className="navbar">
      <button onClick={toggleMenu} className="burger"></button>
      <button className="page-title">Mengary</button>
      <div className="dropdowns">
        <div className="dropdown">
          <Link to='/'>
            <button className="navBtn">Home</button>
          </Link>
          <br />
        </div>
        <div className="dropdown">
          <Link to="/allproducts">
            <button className="navBtn">All Products</button>
          </Link>
          <br />
        </div>
        <div className="dropdown">
          <button className="navBtn cata">
            Categories
            <img src={chevron} className="mr-3" alt="" />
          </button>
          <div className="dropdown-menu">
            <button>Football and Jerseys</button>
            <button>Men Clothings</button>
            <button>Pants</button>
            <button>Caps and Beanies</button>
            <button>Water Bottles</button>
            <button>Earphones</button>
            <button>Shoes and Sneakers</button>
            <button>Bags</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn rounded-none bg-transparent hover:bg-transparent z-[999] cart-btn">
            <AiOutlineShoppingCart className="text-xl mr-2" /> Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
