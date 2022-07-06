import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
// const jwt=require('jsonwebtoken')


const Protected = ({ role, children }) => {
    const isAuthenticated = localStorage.getItem("token");

    if (isAuthenticated) {
        const token = jwtDecode(isAuthenticated)
        console.log(token)
        //console.log(jwtDecode(isAuthenticated))
        if (token.role === role) {
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
    //return <Navigate to="/login" replace />;
};
export default Protected;