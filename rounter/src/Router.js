import React from "react";
import {BroweserRouter ,Routes,Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";

function Router() {
  return (
  <BroweserRouter>
   
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
    </Routes>
    
  </BroweserRouter>
  );
}
export default Router;