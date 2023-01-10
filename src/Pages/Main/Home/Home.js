import React from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import Hero from "../../../Components/Hero";
import SecondHero from "../../../Components/SecondHero";

const Home = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section className="bg-[#151515] text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-5 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Enjoy your shopping experience with
           <span className="underline"><span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-800 to-gray-800 animate-text"> Mengary</span></span> and wear
            fashionable.
          </h1>
          <p className="px-4 mt-8 mb-12 text-lg">
            Wore by more than 10 million shoppers worldwide.
          </p>
        </div>
      </section>
      <section className="my-20 md:my-28">
        <SecondHero></SecondHero>
      </section>
      <section className="my-20 md:my-28">
        <Carousel></Carousel>
      </section>
    </div>
  );
};

export default Home;
