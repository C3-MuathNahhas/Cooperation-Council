import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";
import { CgLogIn} from "react-icons/cg";
import {BiUserPlus}from "react-icons/bi";
import {MdContactPhone}from "react-icons/md"
import "../navigation/navigation.css"
const Navigation=()=>{
    let {path,url}=useRouteMatch()
    const user=useContext(userContext)
    return(
      <div className = 'nav_div'>
           {!user.token?  <div className="nav">
             


             <label className="logo"> <span className="span_1">tra</span><span className="span_2">vel</span><span className="span_3">eo</span></label>
             <Link to={`${url}/about`} className="about">About</Link>
             <Link to={`${url}/contact`} className="contac"><MdContactPhone style={{fontSize:"1.1vw",verticalAlign:"middle"}}/>  Contact</Link>
            <Link to={`${url}/signUp`}className="sign" ><BiUserPlus  style={{fontSize:"1.1vw",verticalAlign:"middle"}}/>   signUp</Link>
            <Link to={`${url}/login`} className="log"><CgLogIn style={{fontSize:"1.1vw",verticalAlign:"middle"}}/> Login</Link>
           
            
          </div>:<div className="nav">
         

          <label className="logo"> <span className="span_1">tra</span><span className="span_2">vel</span><span className="span_3">eo</span></label>
          <Link to={`${url}/home`}className="hme">home</Link>
          <Link to={`${url}/Table`}className="tab">Table</Link>
          <Link to={`${url}/Update`} className="updat">update</Link>
        </div>
      }
    </div>
  );
};
export default Navigation;

