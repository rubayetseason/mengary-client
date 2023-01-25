import React from "react";

const Product = ({ product }) => {
  const { name, img } = product;
  return (
    <div className="rounded-none shadow-md bg-gray-900 text-gray-100">
      <img src={img} alt="" className="object-cover object-center w-full" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-gray-900"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
