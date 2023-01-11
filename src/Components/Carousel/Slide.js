import React from 'react';

const Slide = ({pic, name, id}) => {
    return (
        <>
            <img src={pic} className='relative carousel-img' alt="" />
            <p className='absolute top-1/2 text-md md:text-2xl lg:text-3xl font-bold left-1/3 text-white'>{name}</p>
        </>
    );
};

export default Slide;