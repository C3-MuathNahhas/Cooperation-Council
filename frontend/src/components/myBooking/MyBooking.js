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
        <div className="status"></div>
      </div>
    </div>
  );
};
