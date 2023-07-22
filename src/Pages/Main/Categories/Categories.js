import underline from "../../../Components/Carousel/images/underline.png";
import bag from "../../../Components/Carousel/images/bag.jpg";
import bottle from "../../../Components/Carousel/images/bottle.jpg";
import cap from "../../../Components/Carousel/images/cap.jpg";
import clothes from "../../../Components/Carousel/images/cloths.jpg";
import earphone from "../../../Components/Carousel/images/earphone.jpg";
import football from "../../../Components/Carousel/images/football.jpg";
import pant from "../../../Components/Carousel/images/pants.jpg";
import shoe from "../../../Components/Carousel/images/shoe.jpg";
import './Categories.css';
import Category from "./Category";

const Categories = () => {

    const items = [
        {
          pic: bag,
          name: "Bags",
          id: "bag",
        },
        {
          pic: bottle,
          name: "Bottles",
          id: "bottle",
        },
        {
          pic: cap,
          name: "Caps",
          id: "cap",
        },
        {
          pic: clothes,
          name: "Clothes",
          id: "clothing",
        },
        {
          pic: earphone,
          name: "Tunes",
          id: "earphone",
        },
        {
          pic: football,
          name: "Sports",
          id: "sports",
        },
        {
          pic: pant,
          name: "Pants",
          id: "pants",
        },
        {
          pic: shoe,
          name: "Shoes",
          id: "shoe",
        },
      ];
    

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-0">
        <h1 className="text-center text-3xl md:text-4xl font-bold pt-16">
          Collections
        </h1>
        <img className="w-96 mt-[-52px] mb-[-15px]" src={underline} alt="" />
      </div>
      <section>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-10">
      {
        items.map(item => <Category key={item.id} category={item}></Category>)
      }
       </div>
      </section>
    </div>
  );
};

export default Categories;
