import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadProducts,loadAdminProducts, deleteProduct } from "../../action/productaction";

import "../../assets/style/adminPanel.css";
import "../../assets/style/home.css";
import Productcard from "./productCard";


export default function Adminpanel() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadAdminProducts());
  }, []);
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





// class Adminpanel extends React.Component {
  
//   componentWillMount()
//   {
//     console.log("componen")
//     this.props.load()
//   }


//   render() {
//     // console.log("array",this.props.products.products)
//     // return {
//       return(            
//       <div className="product card">
//       {this.props.products.products &&
//         this.props.products.products.map((product) => {
//           return <Productcard props={product} />;
//         })}
//     </div>
//     )

//   // }


// }
// }

// const mapStateToProps = state => ({ products : state.product })
// const mapDispatchToProps = dispatch => {
//   return {
//     load : () => dispatch(loadProducts())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Adminpanel)