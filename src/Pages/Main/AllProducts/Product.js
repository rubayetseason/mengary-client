import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import './Product.css';

const Product = ({ product }) => {
  const { name, img, ratings, price } = product;

  const reviewStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<TiStarFullOutline key={i} className="text-[#FFC000]" />);
    }
    return stars;
  };
  return (
    <div className="card bg-gray-50 rounded-none shadow-md h-full">
      <img src={img} alt="productImage" />
      <div className="card-body gap-0">
        <div className="mb-5">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg flex">{reviewStars(ratings)}</p>
<p className="mt-3 leading-relaxed text-xl font-semibold">$ {price}</p>
        </div>
        <p></p>
<button className="addBtnn">Add to cart </button>
      </div>
    </div>
  );
};

export default Product;
