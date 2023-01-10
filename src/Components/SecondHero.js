import React from "react";
import shoe from "./images/oie_1018947ZmYF7sA4.gif";
import { BsArrowRight } from "react-icons/bs";

const SecondHero = () => {
  return (
    <div className=" bg-white mx-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <img src={shoe} alt="" className="spin-shoe w-10/12 md:3/4 mx-auto" />
        </div>
        <div className="pt-8">
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold">
            Collections from brands around the globe.
          </h1>
          <p className="text-md md:text-xl text-center md:text-left font-semibold mt-5">
            1000+ Brands | 6000+ Products | 1 Million+ Customers
          </p>
          <p className="text-3xl text-center md:text-left font-bold py-6
            bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text">
            Less Hassle. More shopping. 
          </p>
          <div className="text-center md:text-left">
            <button className="btn btn-outline rounded-none started">Check collections &nbsp;
              <BsArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
