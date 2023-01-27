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
          <Link to="/">
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
            <button>
              <Link to="/categories/sports"> Football and Jerseys </Link>
            </button>
            <button>
              <Link to="/categories/clothing">Men Clothings </Link>
            </button>
            <button>
              <Link to="/categories/pants"> Pants </Link>
            </button>
            <button>
              <Link to="/categories/cap"> Caps and Beanies </Link>
            </button>
            <button>
              <Link to="/categories/bottle"> Water Bottles </Link>
            </button>
            <button>
              <Link to="/categories/earphone"> Earphones </Link>
            </button>
            <button>
              <Link to="/categories/shoe"> Shoes and Sneakers </Link>
            </button>
            <button>
              <Link to="/categories/bag"> Bags </Link>
            </button>
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
