import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./routes/router";

function App() {
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   retainAnySession()
  // },[])
  return (
    <BrowserRouter>      
    <Router/>
    </BrowserRouter>
  );
}

export default App;
