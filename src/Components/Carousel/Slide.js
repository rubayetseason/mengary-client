import React from "react";

const Slide = ({ pic, name, id }) => {
  const categoryClicked = (id) => {
console.log(id);
  }
  return (
    <div onClick={() => categoryClicked(id)}>
      <img src={pic} className="relative bg-orange-50 carousel-img" alt="" />
      <p className="absolute top-1/2 text-md md:text-2xl lg:text-3xl font-bold left-1/3 text-white carousel-text">
        {name}
      </p>
    </div>
  );
};

export default Slide;
