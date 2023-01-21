import React from 'react';
import { SlCalender } from "react-icons/sl";
import './Blog.css';

const Blog = ({blog}) => {
    const {thumbnail, name, date} = blog;
    return (
        <section className="mt-14 md:mt-26 lg:mt-30 w-full">
        <div
          className="p-5 mx-auto bg-base-100"
        >
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={thumbnail} alt="" className="w-full bg-gray-500" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 bg-white">
              <div className="space-y-2">
              </div>
              <div className="text-gray-100">
              <div className='flex items-center text-sm text-[#3D3D3D]'>
        <SlCalender/>&nbsp;&nbsp;{date}
              </div>
                <p className="text-black text-base font-semibold mt-4">{name}</p>
<div className='btn-read-box'>
<button className='text-black text-[15px] tracking-widest font-medium mt-4 btn-read'>READ MORE</button>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;