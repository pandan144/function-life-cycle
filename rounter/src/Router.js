import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import App from "./App";

const Router=() => {
  return ( 
  <BrowserRouter>
   
    <Routes>
        <div>hi</div>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/App" element={<App />}></Route>
        <Route path="*" element={<h1>not found 144..</h1>}></Route>
    </Routes>
    
  </BrowserRouter>

 
  );
}
export default Router;