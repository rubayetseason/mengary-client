import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Category = ({category}) => {
    const {name, pic, id} = category;

    return (
        <div className="card bg-base-100 image-full">
        <figure><img src={pic} alt="category-name" /></figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
           <Link to={`/allproducts/${id}`}><button className="btn cat-btn">Check Products</button></Link>
        </div>
      </div>
    );
};

export default Category;