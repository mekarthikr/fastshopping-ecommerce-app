import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct, clearProducts, deleteProduct, loadProducts} from "../../action/productaction";

import "../../assets/style/register.css";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg";

export default function Productview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [state, setState] = useState({
    productname: "",
    image: "",
    color: "",
    price: "",
  });

  const { product,responsemessage } = useSelector((state) => state.product);

  let dispatch = useDispatch();

  useEffect(()=>{},[responsemessage])

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);



  // useEffect(() => {
  //   if (product) {
  //     setState({ ...product });
  //   }
  // }, [product]);
  function goBack() {
    dispatch(clearProducts());
    navigate('/adminpanel');
  }
  const handleDelete = () => {
    dispatch(deleteProduct(id));
    if(responsemessage !== "")
    {
     alert(responsemessage)
     navigate('/adminpanel')
 
    }
   
  };

  function handleEdit() {
    dispatch(loadProducts());
    navigate(`/editproduct/${id}`);
  }

  return (
    <>
      <div className="container main-view-product">
        <img src={arrow} width={"40px"} onClick={() => goBack()} />
        <div className="row">
          <div className="col">
            <img
              className=""
              alt="product"
              width={680}
              height={680}
              src={product.imageurl}
            />
          </div>
          <div className="col main-detail-product">
            <h1>{product.productname}</h1>
            <h2>{product.color}</h2>
            <p>{product.price}</p>
            <button className="color-white bg-blue" onClick={handleDelete}>
              DELETE
            </button>
            <button
              className="color-white bg-blue"
              style={{ margin: "10px" }}
              onClick={handleEdit}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
