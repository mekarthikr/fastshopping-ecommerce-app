import React, { useState } from "react";
import Productcard from "./productcard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  loadProducts,
  increasePage,
  decrementPage,
} from "../../action/productaction";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import EarbudsBatteryRoundedIcon from '@mui/icons-material/EarbudsBatteryRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';

import "../../assets/style/productlist.css";

export default function ProductMain() {
  let dispatch = useDispatch();
  const [category, setPage] = useState("all");
  // const [pageCount,setPageCount]=useState(0)
  const { products, page, pageCount } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts(category, page));
  }, [page, pageCount, category]);

  const handlePrevious = () => {
    dispatch(decrementPage());
  };

  const handleNext = () => {
    dispatch(increasePage());
  };
  function getSpecificProduct(category) {
    dispatch(loadProducts(category, page));
  }
  console.log(page, pageCount);
  return (
    <>
      <div
        style={{
          margin: "0 20px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="force-padding-0"
      >
        <div style={{ flex: "1" }} className="row force-padding-0">
          <div
            style={{ display: "inline" }}
            className="col-md-2 force-padding-0"
          >
            {/* <h1 className="force-padding-0" >all</h1> */}
            {/* <Button  disabled={page===pageCount} style={{color:"black",border:"0px"}} onClick={handleNext}  variant="outlined" endIcon={<ArrowForwardIcon />}>
  Next
</Button> */}
            <div className="sidebar">
              <div>
                {/* <button onClick={() => setPage("all")}>ALL</button> */}
                <Button
            // disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={() => setPage("all")}
            variant="outlined"
            endIcon={<DevicesOtherRoundedIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            ALL
          </Button>
              </div>
              <div>
                {/* <button onClick={() => setPage("laptops")}>LAPTOP</button> */}
                <Button
            // disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={() => setPage("laptops")}
            variant="outlined"
            endIcon={<LaptopMacRoundedIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            LAPTOP
          </Button>
              </div>
              <div>
                {/* <button onClick={() => setPage("smartphone")}>
                  SMARTPHONE
                </button> */}
                <Button
            // disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={() => setPage("smartphone")}
            variant="outlined"
            endIcon={<SmartphoneRoundedIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            SMARTPHONE
          </Button>
              </div>
              {/* <div>
                <button onClick={() => setPage("headphone")}>HEADPHONE</button>
              </div> */}
              <div>
              <Button
            // disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={() => setPage("headphone")}
            variant="outlined"
            endIcon={<HeadsetMicRoundedIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            HEADPHONE
          </Button>
                {/* <button onClick={() => setPage("accessories")}>
                  ACCESSORIES
                </button> */}
                <Button
            // disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={() => setPage("accessories")}
            variant="outlined"
            endIcon={<EarbudsBatteryRoundedIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            ACCESSORIES
          </Button>
              </div>
            </div>
          </div>
          <div
            style={{ margin: "0px 50px" }}
            className="col-md-9 force-padding-0"
          >
            <div className="row">
              {/* <h2>hello</h2> */}

              {products.map((products, index) => (
                <Productcard key={index} details={products} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 mb-4" 
        // style={{marginTop:"100px"}} 
        >
          <Button
            disabled={page === 1}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline"  }}
            onClick={handlePrevious}
            variant="outlined"
            startIcon={<ArrowBackIcon style={{
              width: "35px",
              height: "35px",
            }}  />}
          >
            Prev
          </Button>
<p style={{display:"inline",fontSize:"35px"}} >{page}</p>
          <Button
            disabled={page === pageCount}
            style={{ color: "black", border: "0px",fontSize:"25px",display:"inline" }}
            onClick={handleNext}
            variant="outlined"
            endIcon={<ArrowForwardIcon style={{
              width: "35px",
              height: "35px",
            }} />}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

//  <div className="main-container body">
//     <div style={{flex:"1"}} className="row">
//       <div className="col-md-2">
//       <div className="sidebar bg-blue">
//     <div>
//       <button  onClick={()=>setPage("all")} >ALL</button>
//     </div>
//     <div>
//       <button onClick={()=>setPage("laptops")} >LAPTOP</button>
//     </div>
//     <div>
//       <button onClick={()=>setPage("smartphone")}>SMARTPHONE</button>
//     </div>
//     <div>
//       <button onClick={()=>setPage("headphone")}>HEADPHONE</button>
//     </div>
//     <div>
//       <button onClick={()=>setPage("accessories")}>ACCESSORIES</button>
//     </div>
//    </div>
//       </div>
//       <div className="col">
//         <div className="row">
//         {products.map((products,index) => (
//           <Productcard key={index} details={products} />
//         ))}
//         </div>

//       </div>
//     </div>
//             <div>
//           <Button disabled={page===1} style={{color:"black",border:"0px"}} onClick={handlePrevious} variant="outlined" startIcon={<ArrowBackIcon />}>
//   Prev
// </Button>
// <Button disabled={page===pageCount} style={{color:"black",border:"0px"}} onClick={handleNext}  variant="outlined" endIcon={<ArrowForwardIcon />}>
//   Next
// </Button>
//       </div>
//     </div>
