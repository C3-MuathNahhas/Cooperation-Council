import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [flight, setflight] = useState();
  const [dis, setdis] = useState();
  const [orig, setorig] = useState();
  const [dat, setdat] = useState();

  
  const dist = (e) => {
    setdis(e.target.value);
  };
  const origo = (r) => {
    setorig(r.target.value);
  };
  const dd = (f) => {
    setdat(f.target.value);
  };
  const click = () => {
    axios
      .post("http://localhost:5000/flights/search", { dis, orig, dat })
      .then((result) => {
          console.log(result)
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
