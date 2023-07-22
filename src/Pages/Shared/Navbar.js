import "./Navbar.css";
import chevron from "./images/chevron.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const toggleMenu = () => document.body.classList.toggle("open");

  return (
    <nav className="navbar">
      <button onClick={toggleMenu} className="burger"></button>
      <button className="page-title">Mengary</button>
      <div className="dropdowns">
        <div className="dropdown">
          <Link to="/">
            <button onClick={toggleMenu} className="navBtn">
              Home
            </button>
          </Link>
          <br />
        </div>
        <div className="dropdown">
          <Link to="/allproducts">
            <button onClick={toggleMenu} className="navBtn">
              All Products
            </button>
          </Link>
          <br />
        </div>
        <div className="dropdown">
          <button className="navBtn cata">
            Categories
            <img src={chevron} className="mr-3" alt="" />
          </button>
          <div className="dropdown-menu">
            <button>
              <Link onClick={toggleMenu} to="/allproducts/sports">
                {" "}
                Football and Jerseys{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/clothing">
                Men Clothings{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/pants">
                {" "}
                Pants{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/cap">
                {" "}
                Caps and Beanies{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/bottle">
                {" "}
                Water Bottles{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/earphone">
                {" "}
                Earphones{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/shoe">
                {" "}
                Shoes and Sneakers{" "}
              </Link>
            </button>
            <button>
              <Link onClick={toggleMenu} to="/allproducts/bag">
                {" "}
                Bags{" "}
              </Link>
            </button>
          </div>
        </div>
        <div className="dropdown">
          <Link onClick={toggleMenu} to="/cart">
            {" "}
            <button className="btn rounded-none bg-transparent hover:bg-transparent z-[999] cart-btn relative">
              <AiOutlineShoppingCart className="text-xl mr-2" /> Cart
            </button>
          </Link>
          <div className="absolute top-0 right-[-3px] z-[999] bg-white text-black text-sm px-2 rounded-full font-semibold">
            {products?.length}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
