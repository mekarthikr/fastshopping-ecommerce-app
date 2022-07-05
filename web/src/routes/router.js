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
import  ValidateSession from "../validation/validateSession";
import Footer from "../shared/footer";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/admin/admin";
import Protected from "./protectedRoute";
import { useSelector } from "react-redux";



export function Router() {
  ValidateSession()
  const {isUserLogin}=useSelector((state) => state.user)
  console.log(isUserLogin)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={ <Protected isLoggedIn={isUserLogin}>
        <Productlist />
 </Protected>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Edituser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/editproduct/:id" element={<Editproduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Viewproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      {/* <Footer/> */}
  </>
  );
}