import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [flight, setflight] = useState();
  axios.get("http://localhost:5000/flights/search").then((result) => {
    console.log(result);
    setflight(result);
  });
  return (
    <div>
      <select>
        {flight &&
          flight.map((element, index) => {
            return (
              <div key={index}>
                <option>flight.from</option>
                <option>flight.to</option>
              </div>
            );
          })}
      </select>
      <div>
        <input type="date" value="date from" />
      </div>
    </div>
  );
};
