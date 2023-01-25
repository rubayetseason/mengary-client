import React from "react";
import hero1 from "./images/hero-1.jpg";
import hero2 from "./images/hero-2.jpg";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";
import { Link } from "react-router-dom";

const RealHero = () => {
  return (
    <div className="carousel bg-[#F3F2EE] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-auto pl-5 md:pl-14">
            <div className="text-red-600 tracking-widest text-sm mb-8 mt-8 md:mt-0">
              SUMMER COLLECTION - 2023
            </div>
            <div className="text-4xl md:text-5xl font-semibold mb-4">
              Welcome to the world of{" "}
              <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-800 to-gray-800 animate-text">
                {" "}
                Mengary.
              </span>
            </div>
            <div className="text-md md:text-lg font-light mb-5">
              Exciting offers. Fresh style. Luxury essentials. Max comfort.
            </div>
            <div>
              <Link to='/allproducts'>
                <button className="btn tracking-widest px-3 bg-transparent hover:bg-transparent shop-btn rounded-none z-[100]">
                  Shop Now &nbsp;
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <img src={hero1} alt="" className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn-transparent text-black font-bold">
            ❮--
          </a>
          <a href="#slide2" className="btn-transparent text-black font-bold">
            --❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-auto pl-5 md:pl-14">
            <div className="text-red-600 tracking-widest text-sm mb-8 mt-8 md:mt-0">
              SUMMER COLLECTION - 2023
            </div>
            <div className="text-4xl md:text-5xl font-semibold mb-4">
              Welcome to the world of{" "}
              <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-800 to-gray-800 animate-text">
                {" "}
                Mengary.
              </span>
            </div>
            <div className="text-md md:text-lg font-light mb-5">
              Exciting offers. Fresh style. Luxury essentials. Max comfort.
            </div>
            <div>
              <Link to='/allproducts'>
                <button className="btn tracking-widest px-3 bg-transparent hover:bg-transparent shop-btn rounded-none z-[100]">
                  Shop Now &nbsp;
                  <BsArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <img src={hero2} alt="" className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn-transparent text-black font-bold">
            ❮--
          </a>
          <a href="#slide1" className="btn-transparent text-black font-bold">
            --❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealHero;
