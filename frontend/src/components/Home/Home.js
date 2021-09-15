import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../Home/Home.css";
export const Home = ({ setvalue }) => {
  const destenations = [
    "San Francisco",
    "Amman",
    "Tripoli",
    "Plockton",
    "Carthage",
  ];
  const origins = ["San Francisco", "Amman", "Tripoli", "Plockton", "Carthage"];

  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [adults, setadults] = useState();
  const [dateTo, setDateTo] = useState();
  const history = useHistory();

  const click = () => {
    axios
      .get("http://localhost:5000/flights/", {
        origin,
        destination,
        adults,
        dateFrom,
        dateTo,
      })
      .then((result) => {
        console.log(result.data.flights);
        setvalue(result.data.flights);
        history.push(`${path} / Table`);
      });
  };

  return (
    <>
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
              {destenations.map((item) => {
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
              {origins.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        <h1>adults</h1>
        <input
          className="dateInput"
          type="number"
          onChange={(w) => {
            setadults(w.target.value);
          }}
        />
        <h1>Date</h1>
        <label>from</label>
        <input
          className="dateInput"
          type="date"
          onChange={(e) => {
            setDateFrom(e.target.value);
          }}
        />
        <label>to</label>
        <input
          className="dateInput"
          type="date"
          onChange={(e) => {
            setDateTo(e.target.value);
          }}
        />

        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </>
  );
};
