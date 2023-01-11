import React from "react";
import bag from "./images/bag.jpg";
import bottle from "./images/bottle.jpg";
import cap from "./images/cap.jpg";
import clothes from "./images/cloths.jpg";
import earphone from "./images/earphone.jpg";
import football from "./images/football.jpg";
import pant from "./images/pants.jpg";
import shoe from "./images/shoe.jpg";
import underline from './images/underline.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import Slide from "./Slide";

const Carousel = () => {
  const slides = [bag, bottle, cap, clothes, earphone, football, pant, shoe];

  const items = [
    {
      pic: bag,
      name: 'Bags',
      id: 'bag'
    },
    {
      pic: bottle,
      name: 'Bottles',
      id: 'bottle'
    },
    {
      pic: cap,
      name: 'Caps',
      id: 'cap'
    },
    {
      pic: clothes,
      name: 'Clothes',
      id: 'clothing'
    },
    {
      pic: earphone,
      name: 'Tunes',
      id: 'earphone'
    },
    {
      pic: football,
      name: 'Sports',
      id: 'sports'
    },
    {
      pic: pant,
      name: 'Pants',
      id: 'pants'
    },
    {
      pic: shoe,
      name: 'Shoes',
      id: 'shoe'
    }
  ]

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0">
      <h1 className="text-center text-3xl md:text-4xl font-bold">Collections</h1>
      <img className="w-96 mt-[-52px] mb-[-15px]" src={underline} alt="" />
      </div>
    <Swiper spaceBetween={10} slidesPerView={3} loop>
      {items.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* <img src={slide} className="carousel-img" alt="" /> */}
          <Slide pic={slide.pic} name={slide.name}></Slide>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
