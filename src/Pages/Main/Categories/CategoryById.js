import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../AllProducts/Product";
import ReactPaginate from "react-paginate";
import "./CategoryById.css";

const CategoryById = () => {
  const items = useLoaderData();

  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <section className="bg-[#F3F2EE] py-10 pl-10">
        <h2 className="text-xl font-semibold">{items.length} items found</h2>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-20">
        {currentItems.map((item) => (
          <Product product={item} key={item._id}></Product>
        ))}
      </section>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
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

export default CategoryById;
