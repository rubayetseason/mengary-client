import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

// TiStarFullOutline
const Product = ({ product }) => {
  const { name, img, ratings, price } = product;

  const reviewStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<TiStarFullOutline className="text-[#FFC000]" />);
    }
    return stars;
  };
  return (
    <div className="card bg-gray-50 rounded-none h-full">
      <img src={img} alt="productImage" />
      <div className="card-body">
        <div className="mb-5">
          <h2 className="card-title text-2xl mb-5">{name}</h2>
          <p className="text-lg flex">{reviewStars(ratings)}</p>
        </div>
        <p className="leading-relaxed mb-2 text-xl font-semibold">$ {price}</p>
 <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
