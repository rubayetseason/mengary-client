import React from 'react';
import './Categories.css';

const Category = ({category}) => {
    const {name, pic, id} = category;

    const getId = (_id) => {
        console.log(_id);
    }

    return (
        <div className="card bg-base-100 image-full">
        <figure><img src={pic} alt="Shoes" /></figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
            <button onClick={() => getId(id)} className="btn cat-btn">Check Products</button>
        </div>
      </div>
    );
};

export default Category;