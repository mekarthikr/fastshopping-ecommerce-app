import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "../../assets/style/productlist.css";
import { loadProducts } from "../../action/productaction";

export default function Sidebar() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts("all"))    
  }, []);
function getSpecificProduct(category)
{
  dispatch(loadProducts(category))
}

  return (
    <>  
   <div className="col-2 sidebar">
    <div className="col">
      <button  onClick={()=>getSpecificProduct("all")} >ALL</button>
    </div>  
    <div className="col">
      <button onClick={()=>getSpecificProduct("laptops")} >LAPTOP</button>
    </div>
    <div className="col">
      <button onClick={()=>getSpecificProduct("smartphone")}>SMARTPHONE</button>
    </div>
    <div className="col">
      <button onClick={()=>getSpecificProduct("headphone")}>HEADPHONE</button>
    </div>
    <div className="col">
      <button onClick={()=>getSpecificProduct("accessories")}>ACCESSORIES</button>
    </div>
   </div>   
    </>
  );
}