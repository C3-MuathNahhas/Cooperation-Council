import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export const UpdateFlightBooking = ({ state, updated }) => {
  const [adults, setadults] = useState();

  const history = useHistory();

  const update = (e) => {
    setadults(e.target.value);
  };
  const click = () => {
    console.log(state.token);
    axios
      .put(
        `http://localhost:5000/flightBooking/${updated}`,
        {
          adults,
        },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((result) => {
        swal("Number of Adults was updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="">
        <input
          type="number"
          placeholder="Enter the New Number of Adults"
          onChange={update}
        />
        <button
          style={{ backgroundColor: "red" }}
          type="button"
          onClick={click}
        >
          Update
        </button>
      </div>
    </>
  );
};
