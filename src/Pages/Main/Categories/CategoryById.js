import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../AllProducts/Product';

const CategoryById = () => {

    const items = useLoaderData();

    return (
        <div>
            <section className='bg-[#F3F2EE] py-10 pl-10'>
               <h2 className='text-xl font-semibold'>{items.length} items found</h2>
            </section>
  <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-20'>
    {
        items.map(item => <Product product={item} key={item._id}></Product>)
    }
  </section>
        </div>
    );
};

export default CategoryById;