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
          <button>Learn CSS Ebook</button>
          <button>Security Course</button>
          <button>Masterclass Bundle</button>
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
