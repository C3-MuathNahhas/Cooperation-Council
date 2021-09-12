import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [flight, setflight] = useState();
  const [origin, setorigin] = useState();
  const [destination, setdestination] = useState();
  const [date, setdate] = useState();

  
  const dist = (e) => {
    setorigin(e.target.value);
  };
  const origo = (r) => {
    setdestination(r.target.value);
  };
  const dd = (f) => {
    setdate(f.target.value);
  };
  const click = () => {
    axios
      .post("http://localhost:5000/flights/search", { origin, destination, date })
      .then((result) => {
          //console.log(result)
        setflight(result);
      });
  };
  return (
    <div>
      
      <input type="text" onChange={dist} />
      
      <br />
      <br />
      <input type="text" onChange={origo} />
      <br />
      <br />
      <input type="date" onChange={dd} />
      <br />
      <br />
      <input type="button" onClick={click} value="click" />
      <br />
      <br />
      <input type="date" />
      <br />
      <br />
      <input type="date" />
      <br />
      <br />
      {flight &&
        flight.map((element, index) => {
          return (
            <div key={index}>
              <h1>{element.flight_name}</h1>
            </div>
          );
        })}
    </div>
  );
};
