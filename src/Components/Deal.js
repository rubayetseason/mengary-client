import React from "react";
import sales from "./images/sales-bag.png";
import Timer from "./Timer";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Deal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-0 bg-[#F3F2EE] py-14 md:py-32 px-5">
      <div className="md:pl-20 my-auto flex flex-col text-3xl font-semibold gap-8 cursor-pointer">
        <div className="text-[#B7B7B7] font-normal">Clothings Hot</div>
        <div>Bags Collection</div>
        <div className="text-[#B7B7B7] font-normal">Accessories</div>
      </div>
      <div className="relative">
        <img src={sales} alt="" />
        <div className="bg-black text-white absolute top-0 right-[70px] flex flex-col justify-center items-center h-24 w-24 rounded-full">
          <p>Sales of</p>
          <p className="font-semibold text-lg">$29.99</p>
        </div>
      </div>
      <div>
        <div className="text-red-600">DEAL OF THE WEEK</div>
        <br />
        <div className="text-3xl font-semibold">
          Multi-pocket Chest Bag Black
        </div>
        <br />
        <div>
          <Timer givenTime={1814400000}></Timer>
        </div>
        <div><br />
  <Link to='/categories/bag'>
  <button className="btn rounded-none shop-btn bg-transparent hover:bg-transparent z-[100]">
            Shop Now  &nbsp;<BsArrowRight />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Deal;
