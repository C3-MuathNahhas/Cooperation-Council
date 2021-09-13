import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const UpdateFlightBooking = () => {
  const [adult, setadult] = useState();
  const history = useHistory();
  const update = (e) => {
    setadult(e.target.value);
  };
  const click = () => {
    axios
      .put("http://localhost:5000/flightBooking/613f7bbd7a7d0b4d7448f1b7", {
        adult,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="homed">
        <input
          type="number"
          placeholder="Enter the New Number of Adults"
          onChange={update}
        />
        <button type="button" onClick={click}>
          Update
        </button>
      </div>
    </>
  );
};
