import axios from "axios";
import React, { useState, useEffect } from "react";
import "./prayertime.css";
import { FaMosque } from "react-icons/fa";
import { GiPlanePilot } from "react-icons/gi";

//new
function Prayertime() {
  const cityNames = ["amman", "dubai-ae", "riyadh-sa"];
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
        <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
        <span style={{ color: "rgb(252,158,21)" }}>val</span>
        <GiPlanePilot style={{ fontSize: "3vw" }} />
        <span style={{ color: "rgb(227,64,61)" }}>eo</span>
      </h1>
      <p>Prayer Times</p>
      <div className="pray_times">
        <select className="pray_select" onChange={changeHandler}>
          <option> -- Change Location --</option>

          {cityNames.map((ui, i) => {
            return <option key={i}>{ui}</option>;
          })}
        </select>
        <br />
        <br />
        <span style={{ color: "rgb(19,145,210)" }}>
          {" "}
          Sunrise <FaMosque style={{ color: "rgb(19,145,210)" }} />
          {sunrise}
        </span>
        <span style={{ color: "rgb(19,145,210)" }}>
          Fajr <FaMosque style={{ color: "rgb(19,145,210)" }} />
          {fajr}
        </span>
        <span style={{ color: "rgb(19,145,210)" }}>
          Dhuhr <FaMosque style={{ color: "rgb(19,145,210)" }} />
          {dhuhr}
        </span>
        <span style={{ color: "rgb(252,154,31)" }}>
          Asr <FaMosque style={{ color: "rgb(252,154,31)" }} />
          {asr}
        </span>
        <span style={{ color: "rgb(252,154,31)" }}>
          Maghrib <FaMosque style={{ color: "rgb(252,154,31)" }} />
          {maghrib}
        </span>
        <span style={{ color: "rgb(252,154,31)" }}>
          Sunset <FaMosque style={{ color: "rgb(252,154,31)" }} />
          {sunset}
        </span>
        <span style={{ color: "rgb(227,64,61)" }}>
          Isha <FaMosque style={{ color: "rgb(227,64,61)" }} />
          {isha}
        </span>
        <span style={{ color: "rgb(227,64,61)" }}>
          hijri <FaMosque style={{ color: "rgb(227,64,61)" }} />
          {hijri}
        </span>
      </div>
    </div>
  );
}

export default Prayertime;
// FaMosque;
