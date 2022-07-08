import React from "react";
import Productcard from "./productcard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../../action/productaction";

import "../../assets/style/productlist.css";

export default function ProductMain() {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts("all"));
  }, []);

  return (
    <>
      <div className="main-container row">
        {products.map((products,index) => (
          <Productcard key={index} details={products} />
        ))}
      </div>
    </>
  );
}
