import axios from "axios";
import React, { useState, useEffect } from "react";
import "./prayertime.css";

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

  useEffect(() => {
    axios
      .get(`https://api.pray.zone/v2/times/today.json?city=amman`)
      .then((result) => {
          console.log(result.data.results.datetime[0].times);
          setSunrise(result.data.results.datetime[0].times);
          setFajr(result.data.results.datetime[0].times);
          setDhuhr(result.data.results.datetime[0].times);
          setAsr(result.data.results.datetime[0].times);
          setMaghrib(result.data.results.datetime[0].times);
          setSunset(result.data.results.datetime[0].times);
          setIsha(result.data.results.datetime[0].times);
          sethijri(result.data.results.datetime[0].times);
      });
  }, []);
  return (
    <div className="pray_div">
      <h1>{} here</h1>
    </div>
  );
}

export default Prayertime;
