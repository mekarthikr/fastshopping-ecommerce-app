import React,{ useEffect }  from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadProducts } from "../../action/productaction";
import "../../assets/style/productcard.css";

export default function Productcard(props) 
{
  useEffect(() => {
    dispatch(loadProducts());
  }, []);


  let dispatch = useDispatch();
  let navigate = useNavigate();

  function viewProduct(id) {
    navigate(`/admin/viewproduct/${id}`);
  }

  return (
    <div className="single-product card">
      <img src={props.props.imageurl} alt="product" />
      <div className="inline">
        <h5 className="inline">{props.props.name}</h5>
        <button onClick={() => viewProduct(props.props._id)}>VIEW</button>
      </div>
    </div>
  );
}
