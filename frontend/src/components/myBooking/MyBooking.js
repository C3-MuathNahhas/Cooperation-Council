import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./MyBooking.css";

export const MyBooking = ({book}) => {
  const [value, setvalue] = useState();
  const click = () => {};
  console.log("book",book)
  return (
    <div>
      <div className="card">
        <div className="image"></div>
        <div className="text">
          <span className="date">Your Book</span>
          <h2>Welcome</h2>
          <button className="btn1">Update</button>
          <button className="btn1">Delete</button>
        </div>
        <div className="status">
          <div className="stat">
            <div className="value">capacity</div>
            <div className="type">Capacity</div>
          </div>
          <div className="statborder">
            <div className="value"></div>
            <div class="type">views</div>
          </div>
          <div className="stat">
            <div className="value">32</div>
            <div class="type">comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};
