import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import Loader from "../../Shared/Loader";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Products.css";

const Products = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.searchData.value;
    setSearchText(search);
  };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      const res = fetch(
        `https://mengary-server.vercel.app/products?search=${searchText}`
      );
      const data = await (await res).json();
      return data;
    },
  });

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Loader></Loader>
      </div>
    );
  }

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
        <form onSubmit={handleSearch} className="mt-5 md:mt-4">
          <div className="font-sans text-black flex">
            <div className="border rounded-none overflow-hidden flex ">
              <input
                type="text"
                name="searchData"
                className="px-4 py-2 outline-none"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center bg-white px-4 border-l">
                <CiSearch className="text-xl" />
              </button>
            </div>
          </div>
        </form>
        <p className="mt-4 text-gray-500">
          Found {products.length} available items
        </p>
      </section>
      <div className="px-5 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentItems.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default Products;
