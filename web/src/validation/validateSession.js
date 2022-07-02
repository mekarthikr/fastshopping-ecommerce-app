import { useSelector } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";


export default function ValidateSession() {
    const location = useLocation()
    let navigate = useNavigate();
    console.log("location",location)
    const { isLogin } = useSelector((state) => state.user)
    let url = window.location.href;

    if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {
        return true
    }
    else
    {
        if(!isLogin)
        {
            navigate("/")
            console.log("false")
            return false
        }
    }
}