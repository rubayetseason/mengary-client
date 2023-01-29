import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import Navbar from "../Pages/Shared/Navbar";
import { addToDb } from "../Utils/FakeDB";

export const CartContext = createContext([]);
const Main = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const handleAddToCart = (product) => {
    //used to get the previous items and new items all together in the cart
    // setCart(previous => [...previous, product]);

    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct._id === product._id
    );
    //used to add a new quantity to the selected new product
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct._id !== product._id
      );
      //used to increase the quantity of the selected product
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    //used to set all these data to the state
    setCart(newCart);
    //used to set the data id to the localstorage along with its quantity
    addToDb(product._id);
    toast.success("Product added to cart");
  };

  console.log(cart);

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </CartContext.Provider>
    </div>
  );
};

export default Main;
