import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
