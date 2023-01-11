import React from "react";
import bag from "./images/bag.jpg";
import bottle from "./images/bottle.jpg";
import cap from "./images/cap.jpg";
import clothes from "./images/cloths.jpg";
import earphone from "./images/earphone.jpg";
import football from "./images/football.jpg";
import pant from "./images/pants.jpg";
import shoe from "./images/shoe.jpg";
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
      name: 'Earphones',
      id: 'earphone'
    },
    {
      pic: football,
      name: 'Football',
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
    <Swiper spaceBetween={10} slidesPerView={3} loop>
      {items.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* <img src={slide} className="carousel-img" alt="" /> */}
          <Slide pic={slide.pic} name={slide.name}></Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
