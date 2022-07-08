import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, deleteProduct } from "../../action/productaction";

import "../../assets/style/adminPanel.css";
import "../../assets/style/home.css";
import Productcard from "./productCard";

export default function Adminpanel() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="product card">
        {products &&
          products.map((product) => {
            return <Productcard props={product} />;
          })}
      </div>
    </>
  );
}
