import React, { useState } from "react";
import "../Modal/Modal.css";
import {useHistory,useRouteMatch} from "react-router-dom";

const Modal =()=>{
    
    let {path,url}=useRouteMatch();
    const history=useHistory();

    return (
     
        <div className="modal-wrapper">
        
        </div>
    )
}
export default Modal 