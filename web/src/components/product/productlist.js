import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../../assets/style/productlist.css";
import { loadProducts } from "../../action/productaction";
import Sidebar from "./sidebar";
import ProductMain from "./productmain";

export default function PersonList() {
  let dispatch = useDispatch();
   const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts("all"))
  }, []);

  return (
    <>
    <div className="row">
        <div className="col-2">
        	<Sidebar/>  
        </div>
        <div className="col-10">
          	<ProductMain/>
        </div>
      </div>
    </>
  );
}