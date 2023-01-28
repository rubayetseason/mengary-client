import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import Navbar from "../Pages/Shared/Navbar";

export const CartContext = createContext([]);
const Main = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    console.log(product);
  };



  return (
    <div>
        <CartContext.Provider value={{cart, setCart, handleAddToCart}}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
        </CartContext.Provider>
    </div>
  );
};

export default Main;
