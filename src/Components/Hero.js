import React from "react";
import "./Hero.css";
import { BsArrowRight } from "react-icons/bs";
import sweater from "./images/sweater.png";

const Hero = () => {
  return (
    <div className="hero poster">
      <div className="hero-content pb-0 pt-20 flex justify-center items-center gap-10 max-w-7xl flex-col-reverse lg:flex-row-reverse">
        <div className="w-11/12">
          <img src={sweater} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent 
            from-green-500 via-sky-500 to-blue-700
            animate-text  pb-2">
            Exciting Offers!!
          </h1>
          <h3 className="text-3xl md:text-4xl mt-2 md:mt-5 font-bold text-center">
            Shop freely with{" "}
            <span className="font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-600 via-rose-800 to-gray-800 animate-text">
              Mengary.
            </span>
          </h3>
          <p className="py-4 md:py-6 text-sm md:text-xl text-center">
            Fresh style. Max comfort. Welcome to Mengary.
          </p>
          <div className="text-center">
            <button className="btn bg-transparent hover:bg-transparent shop-btn rounded-none">
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
