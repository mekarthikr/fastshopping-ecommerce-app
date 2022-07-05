import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userIsLoggedIn } from "../action/useraction";



export default function ValidateSession() {
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log("location",location)
    // const { isLogin } = useSelector((state) => state.user)
    // let url = window.location.href;

    // if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {
    //     return true
    // }
    // else
    // {
    //     if(!isLogin)
    //     {
    //         navigate("/")
    //         console.log("false")
    //         return false
    //     }
    // }
    const isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated)
    if (isAuthenticated) {
        dispatch(userIsLoggedIn())
        var decoded = jwt_decode(isAuthenticated);
        console.log(decoded);
        return true
    }
}