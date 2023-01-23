import React from "react";
import "./Navbar.css";
import chevron from "./images/chevron.svg";

const Navbar = () => {
  const toggleMenu = () => document.body.classList.toggle("open");

  return (
    <nav class="navbar">
    <button onClick={toggleMenu} class="burger"></button>
    <button class="page-title">Mengary</button>
    <div class="dropdowns">
      <div class="dropdown">
        <button class="navBtn">
          All Products
        </button>
        <br />
      </div>
      <div class="dropdown">
        <button class="navBtn">
          Categories
          <img src={chevron} alt='' />
        </button>
        <div class="dropdown-menu">
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
      <div class="dropdown">
        <button class="navBtn">
          Cart
        </button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
