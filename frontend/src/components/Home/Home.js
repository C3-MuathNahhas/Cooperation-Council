import React, { useState } from "react";
import axios from "axios";
import "../Home/home.css";

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
  const booking = () => {};
  return (
    <>
      <div className="home">
        <input type="text" onChange={dist} />
       
        <input type="text" onChange={origo} />
        
        <input type="date" onChange={dd} />
       
        <button type="button" onClick={click}>
          Search
        </button>
       
      </div>
      <div>
        <table style={{ border: "1" }}>
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
              console.log(element);
              return (
                <tbody>
                  <tr key={index}>
                    <td>{element.flight_name}</td>
                    <td>{element.stops}</td>
                    <td>{element.price.total}$</td>

                    <td>
                      <button
                        type="button"
                        data-book-id={element._id}
                        onClick={booking}
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};
