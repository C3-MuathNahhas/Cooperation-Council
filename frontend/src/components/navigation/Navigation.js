import React,{useContext} from "react";
import { Link,useRouteMatch } from "react-router-dom";
import SignUp from "../auth/SignUp";

import { userContext } from "../../App";
const Navigation=()=>{
    let {path,url}=useRouteMatch()
    const user=useContext(userContext)
    return(
      <div>
           {!user.token?  <div className="nav">
            <Link to={`${url}/signUp`} >signUp</Link>
            <Link to={`${url}/login`}>Login</Link>
          </div>:<div className="nav">
          <Link to={`${url}/home`}>home</Link>
         
        </div>
}
      </div>
    )
}
export default Navigation