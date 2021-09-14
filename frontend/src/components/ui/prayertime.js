import axios from "axios";
import React, { useState, useEffect } from "react";
import "./prayertime.css";

import { FaMosque } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        setSunrise(result.data.results.datetime[0].times.Sunrise);
        setFajr(result.data.results.datetime[0].times.Fajr);
        setDhuhr(result.data.results.datetime[0].times.Dhuhr);
        setAsr(result.data.results.datetime[0].times.Asr);
        setMaghrib(result.data.results.datetime[0].times.Maghrib);
        setSunset(result.data.results.datetime[0].times.Sunset);
        setIsha(result.data.results.datetime[0].times.Isha);
        sethijri(result.data.results.datetime[0].date.hijri);
      });
  }, []);
  return (
    <div className="pray_div">
      <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={FaMosque} />
      Sunrise:{sunrise}
      <br />
      Fajr:{fajr}
      <br />
      Dhuhr:{dhuhr}
      <br />
      Asr:{asr}
      <br />
      Maghrib:{maghrib}
      <br />
      Sunset:{sunset}
      <br />
      Isha:{isha}
      <br />
      hijri:{hijri}
    </div>
  );
}

export default Prayertime;
// FaMosque;
