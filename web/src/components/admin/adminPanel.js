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

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  function handleEdit(id) {
    navigate(`/editproduct/${id}`);
  }

  function addProduct() {
    navigate("/addProduct");
  }
  console.log(products)

  return (
    <>
      {/* <button className="admin-button" onClick={() => addProduct()}>
        ADD PRODUCT
      </button>
      <button className="admin-button">LOGOUT</button> */}
      <div className="product card">
          {products &&
            products.map((product) => {
              return (
                <Productcard props={product}/>
                // add this in a seperate component
                // <div className="single-product card">
                //   <img src={product.imageurl} alt="product" />
                //   <div className="inline">
                //     <h5 className="inline">{product.name}</h5>
                //     <button onClick={() => handleEdit(product._id)}>EDIT</button>
                //     <button onClick={() => handleDelete(product._id)}>
                //       DELETE
                //     </button>
                //   </div>
                // </div>
              );
            })}
      </div>
    </>
  );
}