import React, { useState } from "react";
import axios from "axios";
import "../ui/weather.css";
import cityist from "../cities_list";

function Weather() {
  console.log(cityist);
  const [icon, setIcon] = useState("amman");
  const [description, setDescription] = useState();
  const [temperature, setTemperature] = useState();

  const changeHandler = (e) => {
    axios
      .get(
        `http://api.weatherbit.io/v2.0/current?&city=${e.target.value}&key=5a29c29a396441bfa77f13c5e4b922f8&include=minutely&lang=en`
      )
      .then((result) => {
        setIcon(result.data.data[0].weather.icon);
        setDescription(result.data.data[0].weather.description);
        setTemperature(result.data.data[0].temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="weather_div">
      <div className="weather_select">
        <select onChange={changeHandler}>
          

          {cityist.map((ui, i) => {
            return `<option>${ui}</option>`;
          })}
        </select>
      </div>

      <div className="weather_img">
        {description && (
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          ></img>
        )}
      </div>
      <div className="weather_description">
        <h1>{description}</h1>
      </div>
      <div className="weather_temp">
        <h1>{temperature}°C</h1>
      </div>
    </div>
  );
}

export default Weather;
