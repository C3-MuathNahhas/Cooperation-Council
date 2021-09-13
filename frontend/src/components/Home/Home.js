import React, { useState} from "react";
import { useHistory,useRouteMatch } from "react-router-dom";
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
        setvalue(result.data);
        history.push(`${path}/Table` )
        
      });
  };

  return (
      <>
      
    <div className="homed">
      <input type="text" onChange={dist} />

      <input type="text" onChange={origo} />

      <input type="date" onChange={dd} />

      <button type="button" onClick={click}>
        Search
      </button>
    </div>
    </>
  );
};
