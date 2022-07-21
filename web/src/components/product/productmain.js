import React, { useState } from "react";
import Productcard from "./productcard";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import EarbudsBatteryRoundedIcon from "@mui/icons-material/EarbudsBatteryRounded";
import DevicesOtherRoundedIcon from "@mui/icons-material/DevicesOtherRounded";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts,increasePage,decrementPage} from "../../action/productaction";

import productnotfound from "../../assets/image/productnotfound.jpg";

import "../../assets/style/productlist.css";

export default function ProductMain() {
  let dispatch = useDispatch();
  const [category, setPage] = useState("all");
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
      <div style={{ margin: "0 20px", display: "flex", flexDirection: "column", minHeight: "100vh"}} className="force-padding-0">
        <div style={{ flex: "1" }} className="row force-padding-0">
          <div style={{ display: "inline" }} className="col-md-2 force-padding-0" >
            <div className="sidebar">
              <div>
                <Button className="product-main-button" onClick={() => setPage("all")} variant="outlined" endIcon={
                    <DevicesOtherRoundedIcon style={{ width: "35px", height: "35px" }} /> 
                }>
                  ALL
                </Button>
              </div>
              <div>
                <Button className="product-main-button" onClick={() => setPage("laptops")} variant="outlined" endIcon={
                    <LaptopMacRoundedIcon style={{ width: "35px", height: "35px"}} />
                }>
                  LAPTOP
                </Button>
              </div>
              <div>
                <Button className="product-main-button" onClick={() => setPage("smartphone")} variant="outlined" endIcon={
                    <SmartphoneRoundedIcon style={{ width: "35px", height: "35px" }} />
                  }>
                  SMARTPHONE
                </Button>
              </div>
              <div>
                <Button className="product-main-button" onClick={() => setPage("headphone")} variant="outlined" endIcon={
                    <HeadsetMicRoundedIcon style={{ width: "35px", height: "35px" }}/>
                  }>
                  HEADPHONE
                </Button>
                <Button className="product-main-button" onClick={() => setPage("accessories")} variant="outlined" endIcon={
                    <EarbudsBatteryRoundedIcon style={{ width: "35px", height: "35px" }} />
                  }>
                  ACCESSORIES
                </Button>
              </div>
            </div>
          </div>
          <div style={{ margin: "0px 50px" }} className="col-md-9 force-padding-0" >
            <div className="row">
              {products.length !== 0 ? (
                products.map((products, index) => (
                  <Productcard key={index} details={products} />
                ))
              ):(
                <>
                  <img src={productnotfound} style={{ width: "300",height: "300",padding: "0 400px 0 400px"}}/>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5">
          <Button disabled={page === 1} style={{ color: "black", border: "0px", fontSize: "25px", display: "inline", }} onClick={handlePrevious} variant="outlined" startIcon={
              <ArrowBackIcon style={{ width: "35px", height: "35px"}} />
            }>
            Prev
          </Button>
          <p style={{ display: "inline", fontSize: "35px" }}>{page}</p>
          <Button disabled={page === pageCount} style={{ color: "black",border: "0px", fontSize: "25px", display: "inline"}} onClick={handleNext} variant="outlined" endIcon={
              <ArrowForwardIcon style={{ width: "35px", height: "35px" }}/>
            }>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}