import React from 'react';
import { GiRoundStar } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { FaQuoteRight } from "react-icons/fa";
// FaQuoteRight

const ReviewItem = ({review}) => {
    const {name, location, desc} = review;
    return (
        <div className="w-72 bg-white border-2 border-black px-4 py-5">
<div className='flex text-[#FEBC13] mb-5'>
    <GiRoundStar/>
    <GiRoundStar/>
    <GiRoundStar/>
    <GiRoundStar/>
    <GiRoundStar/>
</div>
  <div className="">
    <p className='text-lg mb-5'>"{desc}"</p>
  </div>
  <p className='font-bold text-lg items-start'>{name}, {location}</p>
  <div className='flex justify-between'>
    <div className='flex items-center text-sm'><GoVerified className='text-[#0CCE6B] text-md'/>&nbsp;Verified purchase</div>
    <div className='text-4xl'><FaQuoteRight/></div>
  </div>
</div>
    );
};

export default ReviewItem;