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
          <img src={props.src.src} className="modal_img"></img>
          <iframe
            className="modal_img_details"
            src={`https://en.wikipedia.org/wiki/${props.src.name}`}
          ></iframe>
        </div>
      )}
      {props.src && <div className="back_div" onClick={hideBack}></div>}
    </div>
  );
}
//new
export default Modal;
