import React,{useContext} from "react";
import { Link,useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";
const Navigation=()=>{
    let {path,url}=useRouteMatch()
    const user=useContext(userContext)
    return(
      <div>
           {!user.token?  <div className="nav">
             
             <label class="log"> traveleo</label>
             <Link to={`${url}/contact`}>Contact</Link>
            <Link to={`${url}/signUp`}className="sign" >signUp</Link>
            <Link to={`${url}/login`} className="log">Login</Link>
            
          </div>:<div className="nav">
          
          <Link to={`${url}/home`}>home</Link>
         
        </div>
}
      </div>
    )
}
export default Navigation