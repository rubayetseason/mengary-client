import React from "react";
import Carousel from "./Carousel";
import "./Hero.css";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero min-h-screen poster">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-11/12">
          <Carousel></Carousel>
        </div>
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Exciting Offers!!</h1>
          <h3 className="text-2xl md:text-3xl mt-4 font-bold  text-center">
            Shop freely with{" "}
            <span className="font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">
              Mengary.
            </span>
          </h3>
          
          <p className="py-4 text-sm md:text-md text-center">Fresh style. Max comfort. Welcome to Mengary.</p>
        <div className="text-center">
        <button className="btn hover:bg-transparent shop-btn rounded-none">
            Shop Now &nbsp;
            <BsArrowRight />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
