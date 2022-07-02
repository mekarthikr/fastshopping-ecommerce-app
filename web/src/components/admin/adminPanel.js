import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, deleteProduct } from "../../action/productaction";

import "../../assets/style/adminPanel.css";
import "../../assets/style/home.css";

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

  return (
    <>
      <button className="admin-button" onClick={() => addProduct()}>
        ADD PRODUCT
      </button>
      <button className="admin-button">LOGOUT</button>
      <div className="product card">
          {products &&
            products.map((product) => {
              return (
                <div className="single-product card">
                  <img src={product.image} alt="product" />
                  <div className="inline">
                    <h5 className="inline">{product.productname}</h5>
                    <button onClick={() => handleEdit(product.id)}>EDIT</button>
                    <button onClick={() => handleDelete(product.id)}>
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}