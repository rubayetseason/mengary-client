import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const AllProducts = () => {
  return (
    <div>
      <section className="bg-[#F3F2EE] py-10 pl-10">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <p className="text-base mt-5 md:mt-3">
          <span>
            <Link to="/">Home</Link>
          </span>{" "}
          &nbsp; ❯ &nbsp;{" "}
          <span>
            <Link to="/allproducts"> All products</Link>
          </span>{" "}
        </p>
        <form className="mt-5 md:mt-4">
          <div className="font-sans text-black flex">
            <div className="border rounded-none overflow-hidden flex ">
              <input
                type="text"
                className="px-4 py-2"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center bg-white px-4 border-l">
                <svg
                  className="h-4 w-4 text-grey-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p className="mt-4 text-gray-500">Found 100 available items</p>
      </section>
      <section className="mt-5">
        <Products></Products>
      </section>
    </div>
  );
};

export default AllProducts;
