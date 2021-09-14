import axios from "axios";
import React, { useState, useEffect } from "react";
import "./prayertime.css";
import { FaMosque } from "react-icons/fa";

function Prayertime() {
  const cityNames = ["amman", "paris"];
  const [sunrise, setSunrise] = useState();
  const [fajr, setFajr] = useState();
  const [dhuhr, setDhuhr] = useState();
  const [asr, setAsr] = useState();
  const [maghrib, setMaghrib] = useState();
  const [sunset, setSunset] = useState();
  const [isha, setIsha] = useState();
  const [hijri, sethijri] = useState();

  const changeHandler = (e) => {
    axios
      .get(`https://api.pray.zone/v2/times/today.json?city=${e.target.value}`)
      .then((result) => {
        console.log(result.data.results.datetime[0].times);
        setSunrise(result.data.results.datetime[0].times.Sunrise);
        setFajr(result.data.results.datetime[0].times.Fajr);
        setDhuhr(result.data.results.datetime[0].times.Dhuhr);
        setAsr(result.data.results.datetime[0].times.Asr);
        setMaghrib(result.data.results.datetime[0].times.Maghrib);
        setSunset(result.data.results.datetime[0].times.Sunset);
        setIsha(result.data.results.datetime[0].times.Isha);
        sethijri(result.data.results.datetime[0].date.hijri);
      });
  };

  return (
    <div className="pray_div">
      <h1 style={{ fontSize: "20px" }}>
        <span style={{ color: "rgb(19,145,210)" }}>tre</span>
        <span style={{ color: "rgb(252,158,21)" }}>val</span>
        <span style={{ color: "rgb(227,64,61)" }}>eo</span>
      </h1>
      <p>Prayer Times</p>
      <select className="pray_select" onChange={changeHandler}>
        <option> -- Change Location --</option>

        {cityNames.map((ui, i) => {
          return <option key={i}>{ui}</option>;
        })}
      </select>
      <br />
      <br />
      <FaMosque />
      Sunrise:{sunrise}
      <br />
      <FaMosque /> Fajr:{fajr}
      <br />
      <FaMosque /> Dhuhr:{dhuhr}
      <br />
      <FaMosque />
      Asr:{asr}
      <br />
      <FaMosque />
      Maghrib:{maghrib}
      <br />
      <FaMosque />
      Sunset:{sunset}
      <br />
      <FaMosque />
      Isha:{isha}
      <br />
      <FaMosque />
      hijri:{hijri}
    </div>
  );
}

export default Prayertime;
// FaMosque;
