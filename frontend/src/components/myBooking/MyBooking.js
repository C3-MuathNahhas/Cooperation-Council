import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./MyBooking.css";

export const MyBooking = ({ book, state }) => {
  const [value, setvalue] = useState();
  const [myBook, setMyBook] = useState();
  const click = () => {
    axios
    .get("http://localhost:5000/flightBooking/allBooking", {
      headers: { Authorization: `Bearer ${state.token}` },
    })
    .then((result) => {
      setMyBook(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  console.log("myBook", myBook);
  
  return (
    <div>
      <button onClick={click}>MyBooking</button>
      {[1] &&
        [1].map((element) => {
          return (
            <div>
              <div className="card">
                <div className="image"></div>
                <div className="text">
                  <span className="date">Your Book</span>
                  <h2 className="date">Date:{element[0]}</h2>

                  <h2>Destination: distination</h2>
                  <button className="btn1">Update</button>
                  <button className="btn1">Delete</button>
                </div>
                <div className="status">
                  <div className="stat">
                    <div className="value">Capacity</div>
                    <div className="type">capacity</div>
                  </div>
                  <div className="stat">
                    <div className="value">TotalPrice</div>
                    <div class="type">price$</div>
                  </div>
                  <div className="stat">
                    <div className="value">Adults</div>
                    <div class="type">?</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
