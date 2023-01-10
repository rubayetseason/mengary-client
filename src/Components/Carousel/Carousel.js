import React from 'react';
import bag from './images/bag.jpg';
import bottle from './images/bottle.jpg';
import cap from './images/cap.jpg';
import clothes from './images/cloths.jpg';
import earphone from './images/earphone.jpg';
import football from './images/football.jpg';
import pant from './images/pants.jpg';
import shoe from './images/shoe.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles.css';

const Carousel = () => {
    const slides = [bag, bottle, cap, clothes, earphone, football, pant, shoe];
    return (
        <Swiper spaceBetween={10} slidesPerView={3} loop>
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <img src={slide} className='carousel-img' alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
    );
};

export default Carousel;