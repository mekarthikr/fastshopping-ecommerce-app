import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../action/useraction";
// const jwt=require('jsonwebtoken')

const Protected = ({ role, children }) => {
    const isAuthenticated = localStorage.getItem("token");
    const dispatch=useDispatch()
    if (isAuthenticated) {
        const token = jwtDecode(isAuthenticated)
        console.log(token)
        if (token.role === role) {
            console.log(token.id)
            dispatch(setUserDetail(token.id))
            return children
        }
        else {
            if (role === "admin") {
                return <Navigate to="/admin" replace />;
            }
            else {
                return <Navigate to="/login" replace />;
            }
        }

    }
    else if (role === "admin") {
        console.log("admin access denied")
        return <Navigate to="/admin" replace />;
    }
    else {
        console.log("user access denied")
        return <Navigate to="/login" replace />;
    }
};
export default Protected;