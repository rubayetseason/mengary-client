import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryById = () => {

    const items = useLoaderData();
    console.log(items);

    return (
        <div>
            this is category item
        </div>
    );
};

export default CategoryById;