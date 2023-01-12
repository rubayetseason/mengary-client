import React from "react";
import sales from "./images/sales-bag.png";
import Timer from "./Timer";

const Deal = () => {

  return (
    <div className="grid grid-cols-3 bg-[#F3F2EE] gap-12">
      <div className="flex flex-col text-3xl font-semibold gap-8">
        <div className="text-[#B7B7B7] font-normal">Clothings Hot</div>
        <div>Bags Collection</div>
        <div className="text-[#B7B7B7] font-normal">Accessories</div>
      </div>
      <div  className="relative">
        <img src={sales} alt="" />
        <div className="bg-black text-white absolute top-0 right-0 flex flex-col justify-center items-center h-24 w-24 rounded-full">
          <p>Sales of</p>
          <p className="font-semibold text-lg">$29.99</p>
        </div>
      </div>
      <div>
        <div>
            DEAL OF THE WEEK
        </div>
        <div>
        Multi-pocket Chest Bag Black
        </div>
<div>
<Timer givenTime={2505600000}></Timer>
</div>
        <div>
            <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
