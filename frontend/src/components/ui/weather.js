import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ui/weather.css";
import cityist from "../cities_list";

function Weather() {
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState();
  const [temperature, setTemperature] = useState();
  const [name, setName] = useState();
  if (!name) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=london&appid=fe5020d8dbf399a7c40ed4cd37fb5c74&lang=ar`
      )
      .then((result) => {
        console.log(result.data);
        setIcon(result.data.weather[0].icon);
        setDescription(result.data.weather[0].description);
        setTemperature(result.data.main.temp);
        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const changeHandler = (e) => {
    // .get(
    //   `http://api.weatherbit.io/v2.0/current?&city=${e.target.value}&key=5a29c29a396441bfa77f13c5e4b922f8&include=minutely&lang=en`
    // )
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=fe5020d8dbf399a7c40ed4cd37fb5c74&lang=ar`
      )
      .then((result) => {
        console.log(result.data);
        setIcon(result.data.weather[0].icon);
        setDescription(result.data.weather[0].description);
        setTemperature(result.data.main.temp);
        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  https: return (
    <div className="weather_div">
      <select className="weather_select" onChange={changeHandler}>
        <option>london</option>
        {cityist.map((ui, i) => {
          return <option key={i}>{ui}</option>;
        })}
      </select>
      <div className="weather_details">
        <div className="weather_img">
          {description && (
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`}></img>
          )}
        </div>

        <div>
          <h1>{name}</h1>
          <h1>{description}</h1>
          {temperature && <h1>{`${temperature} °F`}</h1>}
        </div>
      </div>
    </div>
  );
}

export default Weather;
