import React from 'react'
import './modal.css'



function Modal(props) {
    return (
        <div className='modal_div'>
           <img className='modal_img' src={props.src}></img> 
        </div>
    )
}

export default Modal
