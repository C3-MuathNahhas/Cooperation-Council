import React,{useContext} from "react";
import { Link,useRouteMatch } from "react-router-dom";
import SignUp from "../auth/SignUp";

import { userContext } from "../../App";
const Navigation=()=>{
    let {path,url}=useRouteMatch()
    const user=useContext(userContext)
    return(
      <div>
  
      </div>
    )
}
export default Navigation