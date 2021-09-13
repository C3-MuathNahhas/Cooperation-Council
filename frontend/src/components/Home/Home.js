import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../Home/Home.css";

export const Home = ({ setvalue }) => {
  let { path, url } = useRouteMatch();
  const [origin, setorigin] = useState();
  const [destination, setdestination] = useState();
  const [date, setdate] = useState();
  const history = useHistory();
  const dist = (e) => {
    setorigin(e.target.value);
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
        <div id="container">
          <nav>
            <ul>
              <li  ><a href="#" onChange={org}>Origen</a>
                <ul>
                  <li><a href="#">Jordan</a></li>
                  <li><a href="#">Pariss</a></li>
                  <li><a href="#">USA</a></li>
                </ul>
              </li>
              <li><a href="#" onChange={dist}>Destination </a>
                <ul>
                  <li><a href="#">Jordan</a></li>
                  <li><a href="#">Pariss</a></li>
                  <li><a href="#">USA</a>
                    <ul>

                    </ul>
                  </li>
                </ul>
              </li>


            </ul>
          </nav>


        </div>
        <input type="text" onChange={dist} />

        <input type="text" onChange={org} />

        <input type="date" onChange={dd} />

        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </>
  );
};
