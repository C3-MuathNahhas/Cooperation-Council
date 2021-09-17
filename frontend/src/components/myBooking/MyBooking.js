import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./MyBooking.css";

export const MyBooking = () => {
  const [value, setvalue] = useState();
  const click = () => {};

  return (
    <div>
      <div className="card">
        <div className="image"></div>
        <div className="text">
          <span className="date">??</span>
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
