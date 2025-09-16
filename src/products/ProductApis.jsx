import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const ProductApis = () => {
  const [products, setProducts] = useState([]);
  let api = "https://dummyjson.com/products";
  const getProducts = async () => {
    let response = await fetch(api);
    let data = await response.json();
    setProducts(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container gap-2 align-items-start mx-auto flex flex-wrap">
        {products?.map((item, index) => {
          return <SingleProduct {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default ProductApis;
