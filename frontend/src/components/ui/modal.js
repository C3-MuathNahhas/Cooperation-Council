import React from "react";
import "./modal.css";

function Modal(props) {
  return (
    <div className='modal_div'>
      <div className="img_div">
        {props.src && <img src={props.src}></img>}
          </div>
          <div className='back_div'></div>
    </div>
  );
}

export default Modal;
