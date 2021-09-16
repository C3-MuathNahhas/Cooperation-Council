import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./Home.css";
export const Home = ({ setvalue, setadult }) => {
  const destenations = [
    "San_Francisco",
    "Amman",
    "Tripoli",
    "Plockton",
    "Carthage",
  ];

  const deConverter = {
    FlySFO: "San_Francisco  International Airport (FlySFO)",
    QAIA: "Amman Queen Alia International Airport (QAIA)",
    TIP: "Tripoli Tripoli International Airport  (TIP)",
    LCY: "London London City Airport:(LCY)",
    TUN: "Carthage Tunis–Carthage International Airport (TUN)",
  };
  const origins = ["Amman", "San_Francisco", "Tripoli", "London", "Carthage"];
  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState("Amman");
  const [destination, setDestination] = useState("San_Francisco");
  const [dateFrom, setDateFrom] = useState("2021");
  const [adults, setAdults] = useState(1);
  const [dateTo, setDateTo] = useState("2022");
  const history = useHistory();
  const converter = {
    San_Francisco: "FlySFO", //San Francisco International Airport (FlySFO)
    Amman: "QAIA", //Queen Alia International Airport (QAIA)
    Tripoli: "TIP", //Tripoli International Airport  (TIP)
    London: "LCY", //London City Airport:(LCY)
    Carthage: "TUN", //Tunis–Carthage International Airport (TUN)
  };

  const click = () => {
    console.log("hello", {
      origin: converter[origin],
      destination: converter[destination],
      dateFrom,
      adults,
      dateTo,
    });

    axios
      .post("http://localhost:5000/flights/search/", {
        origin: converter[origin],
        destination: converter[destination],
        dateFrom,
        adults,
        dateTo,
      })
      .then((result) => {
        const flights = result.data.flights;
        const handledFlights = flights.map((item) => {
          return {
            destination: deConverter[item.destination],
            origin: deConverter[item.origin],
            date: item.date,
            capacity: item.capacity,
            totalPrice: item.price*adults ,
          };
        });

        console.log("flight", result.data.flights);
        setadult(adults);
        setvalue(handledFlights);
        console.log(path);
        let p = path.split("/home");
        history.push(`${p[0]}/table`);
      });
  };
  return (
    <div>
      <h1>just pick up your treavel with Travaleo</h1>
      <div className="home">
        <div className="bigContainer">
          <div id="container">
            <h1>origin</h1>
            <select
              id="origin"
              name="origin"
              onChange={(r) => {
                setOrigin(r.target.value);
              }}
              required
            >
              {origins.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div id="container">
            <h1>destination</h1>
            <select
              id="destination"
              name="destination"
              onChange={(r) => {
                setDestination(r.target.value);
              }}
              required
            >
              {destenations.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        <h1>adults</h1>
        <input
          className="dateInput"
          type="number"
          defaultValue={1}
          onChange={(w) => {
            setAdults(w.target.value);
          }}
        />
        <h1>Date</h1>
        <label>from</label>
        <input
          className="dateInput"
          type="date"
          defaultValue="2021-01-01"
          onChange={(e) => {
            console.log(e.target.value);

            setDateFrom(e.target.value);
          }}
        />
        <label>to</label>
        <input
          className="dateInput"
          defaultValue="2021-12-31"
          type="date"
          onChange={(e) => {
            setDateTo(e.target.value);
          }}
        />
        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </div>
  );
};
