import Home from "../components/home/home";
import Login from "../components/home/login";
import Register from "../components/home/register";
import Header from "../shared/header";
import Productlist from "../components/product/productlist";
import Edituser from "../components/user/editUser";
import Adminpanel from "../components/admin/adminPanel";
import Editproduct from "../components/admin/editproduct";
import AddProduct from "../components/admin/addProduct";
import Viewproduct from "../components/product/viewproduct";
import Cart from "../components/cart/cart";
import UserProfile from "../components/user/userProfile";
import Protected from "./protectedRoute";
import Productview from "../components/admin/productview";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/admin/admin";
import Checkout from "../components/cart/checkout";
import Footer from "../shared/footer";
import React from "react";



export function Router() {
  return (
    <>
      <Header /> {/* change to app.js */}

      <Routes>
        <Route path="/product" element={<Protected role={"user"}> <Productlist /> </Protected>} />
        <Route path="/home" element={<Protected role={"user"}><Home /></Protected>} />

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/edit" element={<Protected role={"user"}> <Edituser /> </Protected>} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/adminpanel" element={<Protected role={"admin"}> <Adminpanel /></Protected>} />
        <Route path="/editproduct/:id" element={<Protected role={"admin"}> <Editproduct /> </Protected>} />
        <Route path="/admin/viewproduct/:id" element={<Protected role={"admin"}> <Productview /> </Protected>} />
        <Route path="/addProduct" element={<Protected role={"admin"}> <AddProduct /> </Protected>} />

        <Route path="/product/:id" element={<Protected role={"user"}><Viewproduct /></Protected>} />
        <Route path="/cart" element={<Protected role={"user"}> <Cart /> </Protected>} />
        <Route path="/profile" element={<Protected role={"user"}><UserProfile /></Protected>} />
        <Route path="/checkout" element={<Protected role={"user"}><Checkout /></Protected>} />        
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>

      {/* <Footer/> */}
  </>
  );
}
