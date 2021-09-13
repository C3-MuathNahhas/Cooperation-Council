import React, { useState} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

export const UpdateFlightBooking = () => {
 
  const history = useHistory();
 
  const click = () => {
    axios
      .put("http://localhost:5000/flightBooking/:bookingId,{
        
      })
      .then((result) => {
        //console.log(result)
        
        
        
      });
  };

  return (
      <>
      
    <div className="homed">
     
      <input type="number"/>
      <button type="button" onClick={click}>
        Update
      </button>
    </div>
    </>
  );
};
