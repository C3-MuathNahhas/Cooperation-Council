import React, { useState } from "react";
import "../Modal/Modal.css";
import {useHistory,useRouteMatch} from "react-router-dom";

const Modal =()=>{
    
    let {path,url}=useRouteMatch();
    const history=useHistory();

    return (
     
        <div className="modal-wrapper">
        <div className="modal-header">
         <p>Welcome To Our Site</p>
         <span className="close-modal-btn">x</span>
        </div>

        <div className="modal-content">
            <div className="modal-body">
            <p>We are happy to have you join us</p>
            </div>
            <div className="modal-footer">
             <button onClick={()=>{
            
            // console.log(path)
            // console.log("ahmed",url)
             history.push(`/main/login`)
            
             }}   className="btn-cancel">Close</button>
            
            </div>

        </div>
        </div>
    )
}
export default Modal 