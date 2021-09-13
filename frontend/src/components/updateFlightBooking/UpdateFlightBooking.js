import React, { useState} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

export const UpdateFlightBooking = () => {
 const [adult,setadult]=useState();
  const history = useHistory();
  const update=(e)=>{

  }
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
     
      <input type="number" placeholder="Enter the New Number of Adults" onChange={update}/>
      <button type="button" onClick={click}>
        Update
      </button>
    </div>
    </>
  );
};
