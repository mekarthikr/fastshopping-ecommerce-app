import { getSingleProduct, removeProductFromCart } from "../../action/productaction";
import { useDispatch,useSelector } from "react-redux";

import "../../assets/style/productcard.css";
import "../../assets/style/cart.css";
import close from "../../assets/image/close.png";

export default function Cartproduct(props) {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  // console.log("details",props)
  // console.log(products[0])
  const removeFromCart = () => {
    dispatch(getSingleProduct(props.details.id));
  };

  return (
    <div className="cart-card">
      <div className="row">
        <div className="col-md-4">
          <img src={props.details.imageurl} alt="product" />
        </div>
        <div className="col-md-8 cart-product-details">
          <h2 className="inline">{props.details.productname}</h2>
          <img onClick={removeFromCart} src={close} className="" alt="img" />
          <p>{props.details.color}</p>
          <h6 className="float-right inline">{props.details.price}</h6>
          <p>{props.details.quantity}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}