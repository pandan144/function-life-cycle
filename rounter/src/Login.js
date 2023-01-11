//import React from "./react";
import React from "react";
import{Link ,useNavigate} from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();
   const gotoHome =()=>{
        navigate("/home");
    }
    return(
      <> 
       <div>link</div>
       <Link>Home</Link>
       <button onClick={()=>gotoHome()}>home page </button>
       <Link>App</Link>
    </>
       )
}

export default  Login;