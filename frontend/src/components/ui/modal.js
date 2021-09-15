import React from "react";
import "./modal.css";

function Modal(props) {
  const hideBack = () => {
    props.hideBack("");
  };
  return (
    <div className="modal_div">
      {props.src && (
        <div className="img_div">
          {" "}
          <img src={props.src}></img>
        </div>
      )}
      {props.src && <div className="back_div" onClick={hideBack}></div>}
    </div>
  );
}

export default Modal;
