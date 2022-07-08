import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

const Protected = ({ role, children }) => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
        const token = jwtDecode(isAuthenticated)
        if (token.role === role) {
            return children
        }
        else {
            if (role === "admin") {
                return <Navigate to="/admin" replace />;
            }
            else {
                return <Navigate to="/" replace />;
            }
        }

    }
    else if (role === "admin") {
        return <Navigate to="/admin" replace />;
    }
    else {
        return <Navigate to="/" replace />;
    }
};
export default Protected;