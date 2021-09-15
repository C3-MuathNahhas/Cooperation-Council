import React from "react";
import "./modal.css";

function Modal(props) {
  const hideBack = () => {
    props.hideBack("");
  };
  return (
    <div className="modal_div">
      {props.src && (
        <div className="modal_img_div">
          <img src={props.src} className="modal_img"></img>
          <div className="modal_img_details">hi</div>
        </div>
      )}
      {props.src && <div className="back_div" onClick={hideBack}></div>}
    </div>
  );
}

export default Modal;
