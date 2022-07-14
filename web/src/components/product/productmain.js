import React, { useState } from "react";
import Productcard from "./productcard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts,increasePage,decrementPage } from "../../action/productaction";

import "../../assets/style/productlist.css";

export default function ProductMain() {
  let dispatch = useDispatch();
  const [category,setPage]=useState("all")
  // const [pageCount,setPageCount]=useState(0)
  const { products,page,pageCount } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts(category,page));
  }, [page,pageCount,category]);

  const handlePrevious=()=>{
    dispatch(decrementPage())
  }

  const handleNext=()=>{
    // setPage((currentPage)=>{
    //   if(currentPage===pageCount) return currentPage
    //   return currentPage +1
    // })
    dispatch(increasePage())
  }
  function getSpecificProduct(category)
  {
    dispatch(loadProducts(category,page))
  }
  return (
    <>
      <div className="main-container row">
      <div className="col-2">
      <div className="col-2 sidebar bg-blue">
    <div className="col">
      <button  onClick={()=>setPage("all")} >ALL</button>
    </div>  
    <div className="col">
      <button onClick={()=>setPage("laptops")} >LAPTOP</button>
    </div>
    <div className="col">
      <button onClick={()=>setPage("smartphone")}>SMARTPHONE</button>
    </div>
    {/* <div className="col">
      <button onClick={()=>getSpecificProduct("headphone")}>HEADPHONE</button>
    </div>
    <div className="col">
      <button onClick={()=>getSpecificProduct("accessories")}>ACCESSORIES</button>
    </div> */}
   </div>  
        </div>
        {products.map((products,index) => (
          <Productcard key={index} details={products} />
        ))}
      </div>
      <div style={{position:"fixed",botton:"0"}}>
      <button disabled={page===1} onClick={handlePrevious}>previous</button>
      <button disabled={page===pageCount} onClick={handleNext}>next</button>
      </div>
    </>
  );
}
