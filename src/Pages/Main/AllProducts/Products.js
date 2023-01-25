import React from "react";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import Loader from "../../Shared/Loader";

const Products = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = fetch("http://localhost:5000/products");
      const data = await (await res).json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Product product={product} key={product._id}></Product>
      ))}
    </div>
  );
};

export default Products;
