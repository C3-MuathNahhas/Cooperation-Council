import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../Home/Home.css";

export const Home = ({ setvalue }) => {
  let destenations = ["Jordan", "USA", "UEA", "AUE"]
  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState();
  const [destination, setdestination] = useState();
  const [date, setdate] = useState();
  const history = useHistory();
  const dist = (e) => {
    setOrigin(e.target.value);
  };
  const org = (r) => {
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
            <label for="origin">origin</label>

            <select id="origin" name="origin" onChange={(r) => { setOrigin(r.target.value) }} required>

         
            </select>
          </div>

          <input type="text" onChange={dist} />

        </div>
        <div className="bigContainer">

          <h1>{origin}</h1>

        </div>
        <input type="date" onChange={dd} />

        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </>
  );
};
