import React,{ useEffect }  from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadProducts,loadAdminProducts } from "../../action/productaction";
import "../../assets/style/productcard.css";

export default function Productcard(props) 
{
  useEffect(() => {
    dispatch(loadAdminProducts());
  }, []);


  let dispatch = useDispatch();
  let navigate = useNavigate();

  function viewProduct(id){
    navigate(`/admin/viewproduct/${id}`);
  }

  return (
    <div className="single-product mx-5">
      <img src={props.props.imageurl} alt="product" />
      <div className="inline">
        <h5 className="inline">{props.props.name}</h5>
        <button onClick={()=>{viewProduct(props.props._id)}}>VIEW</button>
      </div>
    </div>
  );
}