import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./routes/router";

function App() {
  return (
    <BrowserRouter>      
    <Router/>
    </BrowserRouter>
  );
}

export default App;
