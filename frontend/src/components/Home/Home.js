import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../Home/Home.css";
export const Home = ({ setvalue }) => {
  const destenations = ["San Francisco", "Amman", "Tripoli", "Plockton", "Carthage"];
  const origins = ["San Francisco", "Amman", "Tripoli", "Plockton", "Carthage"];
  /*
  "San Francisco":San Francisco International Airport (FlySFO) :"California"
  "Amman":Queen Alia International Airport (QAIA) :"Jordan"
  "Tripoli":"Tripoli International Airport"  (IATA) :"Turkey"
  "Plockton":"Plockton Airfield"  :"United Kingdom"
  "Carthage":"Tunis–Carthage International Airport"(TUN):"Tunis"
 */

  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [date, setdate] = useState();
  const history = useHistory();

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
        console.log(result)
        setvalue(result.data);
        history.push(`${path}/Table`)

      });
  };



  return (
    <>
      <h1>just pick up your treavel with Travaleo</h1>
      <div className="home">
        <div className="bigContainer">
          <div id="container">
            <h1>origin</h1>
            <select id="origin" name="origin" onChange={(r) => { setOrigin(r.target.value) }} required>
              {
                destenations.map((item) => {
                  return <option value={item}>{item}</option>
                })
              }

            </select>
          </div>
          <div id="container">
            <h1>destination</h1>
            <select id="destination" name="destination" onChange={(r) => { setDestination(r.target.value) }} required>
              {
                origins.map((item) => {
                  return <option value={item}>{item}</option>
                })
              }

            </select>
          </div>
        </div>

        <h1>Date</h1>
        <label>from</label>
        <input className='dateInput' type="date" onChange={dd} />
        <label>to</label>
        <input className='dateInput' type="date" onChange={dd} />

        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </>
  );
};
