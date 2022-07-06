import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userIsLoggedIn } from "../action/useraction";



export default function ValidateSession() {
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated)
    if (isAuthenticated) {
        dispatch(userIsLoggedIn())
        var decoded = jwt_decode(isAuthenticated);
        console.log(decoded);
        return true
    }
    return false
}