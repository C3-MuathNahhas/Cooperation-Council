import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./MyBooking.css";
import jwt from "jsonwebtoken";

export const MyBooking = ({ book,state}) => {
  const userId = jwt.decode(state.token);
  const [value, setvalue] = useState();
  const [myBook, setMyBook] = useState();
  const click = () => {};
  console.log("myBook", myBook);
  axios.get(`http://localhost:5000/${userId}`).then((result)=>{
    setMyBook(result)
  }).catch((err)=>{
    console.log(err);
  })
  return (
    <div>
      {myBook &&
        myBook.map((element) => {
          return (
            <div>
              <div className="card">
                <div className="image"></div>
                <div className="text">
                  <span className="date">Your Book</span>
                  <h2 className="date">Date: {element.date}</h2>

                  <h2>Destination: {element.destination}</h2>
                  <button className="btn1">Update</button>
                  <button className="btn1">Delete</button>
                </div>
                <div className="status">
                  <div className="stat">
                    <div className="value">Capacity</div>
                    <div className="type">{element.capacity-adult}</div>
                  </div>
                  <div className="stat">
                    <div className="value">TotalPrice</div>
                    <div class="type">{element.totalPrice}$</div>
                  </div>
                  <div className="stat">
                    <div className="value">Adults</div>
                    <div class="type">{adult}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
