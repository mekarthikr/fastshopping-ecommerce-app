import React from "react";
import axios from "axios";
import Productcard from "./productcard";
import { API_PRODUCTS } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleUser } from "../../action/useraction";
import "../../assets/style/productlist.css";
import { loadProducts } from "../../action/productaction";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Sidebar from "./sidebar";
import ProductMain from "./productmain";

export default function PersonList() {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts("all"))
    
  }, []);

  

  return (
    <>
    <div className="row">
    
<div className="col-2">
<Sidebar/>  
</div>
    
   <div className="col-10">
    
  
  <ProductMain/>
      {/* <div className="main-container row">
        {products.map((products) => (
          <Productcard key={products.id} details={products} />
        ))}
      </div> */}
      </div>
    </div>
    
    </>
  );
}