import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [icon, setIcon] = useState("amman");
  const [description, setDescription] = useState();

  const changeHandler = (e) => {
    axios
      .get(
        `http://api.weatherbit.io/v2.0/current?&city=${e.target.value}&key=5a29c29a396441bfa77f13c5e4b922f8&include=minutely&lang=ar`
      )
      .then((result) => {
        setIcon(result.data.data[0].weather.icon);
        setDescription(result.data.data[0].weather.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <select onChange={changeHandler}>
        <option>amman</option>
        <option>Tirebolu</option>
      </select>

      {description && (
        <img
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
        ></img>
      )}
      <h1>{description}</h1>

      {/* <button onClick={getWeather}>get weather</button> */}
    </div>
  );
}

export default Weather;
