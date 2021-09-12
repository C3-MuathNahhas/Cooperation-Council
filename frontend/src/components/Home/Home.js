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
      .post("http://localhost:5000/flights/search", {
        origin,
        destination,
        date,
      })
      .then((result) => {
        //console.log(result)
        setflight(result.data);
      });
  };
  const booking = () => {
   
  };
  return (
    <div className="Home">
      <input type="text" onChange={dist} />
      <br />
      <br />
      <input type="text" onChange={origo} />
      <br />
      <br />
      <input type="date" onChange={dd} />
      <br />
      <br />
      <input type="button" onClick={click} value="Search" />
      <br />
      <br />

      <br />
      <br />
      <table style={{border:"1"}}>
      <thead>
          <tr>
          <th>flightName</th>
          <th>Stop</th>
          <th>Price</th>
          <th>Book</th>
          </tr>
          </thead>
      {flight &&
        flight.map((element, index) => {
          return (
            
                <tr>
              <td>{element.flight_name}</td>
              <td>{element.flight_name}</td>
              <td>{element.flight_name}</td>
              <td><input type="button" data-book-id={element._id} onClick={booking} value="Book" /></td>
              </tr>
            
          );
        })}
        </table>
    </div>
  );
};
