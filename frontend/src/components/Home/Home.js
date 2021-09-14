import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../Home/Home.css";
export const Home = ({ setvalue }) => {
  const destenations = ["San Francisco", "Amman", "Tripoli", "Plockton", "Carthage"];
  const origins = ["San Francisco", "Amman", "Tripoli", "Plockton", "Carthage"];
  /*
  "San Francisco":San Francisco International Airport (FlySFO)SFO :"California"
  "Amman":Queen Alia International Airport (QAIA) :"Jordan"
  "Tripoli":"Tripoli International Airport"  (TIP) :"Turkey"
  "London":"London City Airport" (LCY) :"United Kingdom"
  "Carthage":"Carthage Airport"(TUN):"Tunis"
 */
  // let des = ["QAIA", "FlySFO", "TIP", "LCY", "TUN"]
  // let flights = []

  // for (let i = 0; i < 2; i++) {
  //   a.push({
  //     destination: `"${des[getRandomNum(0, 4)]}"`,
  //     origin: `"${des[getRandomNum(0, 4)]}"`,
  //     date: `2021-11-26T${getRandomNum(0, 23)}:30:00.000+00:00`,
  //     capacity: `"${getRandomNum(4, 20)}"`
  //   })
  // }

  // for (let i = 0; i < 2; i++) {
  //   flights.push({
  //     destination: des[getRandomNum(0, 4)],
  //     origin: des[getRandomNum(0, 4)],
  //     date: `2021-11-26T${getRandomNum(0, 23)}:30:00.000+00:00`,
  //     capacity: getRandomNum(4, 20)
  //   })
  // }


  let flights2 = [];
  let des = [];
  for (let i = 0; i < 98; i++) {
    flights2.push({
      destination: des[getRandomNum(0, 4)]
      , origin: des[getRandomNum(0, 4)]
      , date: `2021-${getRandomNum(1, 12)}-${getRandomNum(1, 30)}T${getRandomNum(0, 23)}:30:00.000+00:00`, capacity: getRandomNum(4, 20)
    })
  }
  const getRandomNum = (min, max) => {
    return Math.floor(Math.random(min, max) * 10)
  }

  /*destination:"DXB"
  origin:"AMM"
  date:2021-11-26 T12:30:00.000+00:00
  capacity:5
  */
  let flights = [{ destination: 'TIP', origin: 'LCY', date: '2021-5-14T1:30:00.000+00:00', capacity: 20 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-6-11T5:30:00.000+00:00', capacity: 14 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-3-29T20:30:00.000+00:00', capacity: 10 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-1-3T22:30:00.000+00:00', capacity: 17 }
    , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-18T3:30:00.000+00:00', capacity: 19 }
    , { destination: 'TUN', origin: 'QAIA', date: '2021-1-9T7:30:00.000+00:00', capacity: 19 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-6-4T4:30:00.000+00:00', capacity: 7 }
    , { destination: 'LCY', origin: 'TIP', date: '2021-4-5T2:30:00.000+00:00', capacity: 13 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-2-16T17:30:00.000+00:00', capacity: 13 }
    , { destination: 'QAIA', origin: 'TIP', date: '2021-5-16T14:30:00.000+00:00', capacity: 18 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-1-23T13:30:00.000+00:00', capacity: 14 }
    , { destination: 'FlySFO', origin: 'TUN', date: '2021-1-22T8:30:00.000+00:00', capacity: 5 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-4-17T1:30:00.000+00:00', capacity: 17 }
    , { destination: 'TUN', origin: 'TIP', date: '2021-9-23T7:30:00.000+00:00', capacity: 19 }
    , { destination: 'QAIA', origin: 'TUN', date: '2021-8-14T16:30:00.000+00:00', capacity: 16 }
    , { destination: 'QAIA', origin: 'LCY', date: '2021-12-1T11:30:00.000+00:00', capacity: 14 }
    , { destination: 'TUN', origin: 'FlySFO', date: '2021-6-9T22:30:00.000+00:00', capacity: 6 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-7-24T1:30:00.000+00:00', capacity: 10 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-12-10T4:30:00.000+00:00', capacity: 6 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-3-20T15:30:00.000+00:00', capacity: 20 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-8-2T7:30:00.000+00:00', capacity: 8 }
    , { destination: 'TUN', origin: 'TIP', date: '2021-3-22T11:30:00.000+00:00', capacity: 20 }
    , { destination: 'TUN', origin: 'QAIA', date: '2021-2-24T23:30:00.000+00:00', capacity: 8 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-1-13T23:30:00.000+00:00', capacity: 13 }
    , { destination: 'FlySFO', origin: 'LCY', date: '2021-9-23T0:30:00.000+00:00', capacity: 15 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-8-8T16:30:00.000+00:00', capacity: 12 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-6-30T14:30:00.000+00:00', capacity: 9 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-7-23T9:30:00.000+00:00', capacity: 7 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-11-26T2:30:00.000+00:00', capacity: 20 }
    , { destination: 'LCY', origin: 'TIP', date: '2021-9-3T18:30:00.000+00:00', capacity: 19 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-1-26T8:30:00.000+00:00', capacity: 10 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-3-15T21:30:00.000+00:00', capacity: 12 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-8-3T4:30:00.000+00:00', capacity: 13 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-4-9T0:30:00.000+00:00', capacity: 9 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-5-20T15:30:00.000+00:00', capacity: 8 }
    , { destination: 'QAIA', origin: 'FlySFO', date: '2021-7-24T21:30:00.000+00:00', capacity: 11 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-8-2T0:30:00.000+00:00', capacity: 18 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-4-24T8:30:00.000+00:00', capacity: 16 }
    , { destination: 'TUN', origin: 'QAIA', date: '2021-4-28T3:30:00.000+00:00', capacity: 10 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-3-13T6:30:00.000+00:00', capacity: 17 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-5-19T0:30:00.000+00:00', capacity: 18 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-10-11T11:30:00.000+00:00', capacity: 15 }
    , { destination: 'FlySFO', origin: 'TUN', date: '2021-9-15T22:30:00.000+00:00', capacity: 6 }
    , { destination: 'LCY', origin: 'FlySFO', date: '2021-1-25T17:30:00.000+00:00', capacity: 15 }
    , { destination: 'QAIA', origin: 'TIP', date: '2021-7-22T4:30:00.000+00:00', capacity: 17 }
    , { destination: 'LCY', origin: 'TIP', date: '2021-4-3T17:30:00.000+00:00', capacity: 8 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-6-20T7:30:00.000+00:00', capacity: 11 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-5-8T17:30:00.000+00:00', capacity: 18 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-12-26T7:30:00.000+00:00', capacity: 15 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-11-27T9:30:00.000+00:00', capacity: 6 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-1-21T6:30:00.000+00:00', capacity: 6 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-2-22T18:30:00.000+00:00', capacity: 8 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-6-24T4:30:00.000+00:00', capacity: 7 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-12-7T18:30:00.000+00:00', capacity: 15 }
    , { destination: 'TUN', origin: 'TIP', date: '2021-10-26T21:30:00.000+00:00', capacity: 18 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-5-15T17:30:00.000+00:00', capacity: 17 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-5-4T4:30:00.000+00:00', capacity: 18 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-3-3T21:30:00.000+00:00', capacity: 19 }
    , { destination: 'FlySFO', origin: 'TUN', date: '2021-6-2T23:30:00.000+00:00', capacity: 8 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-5-19T23:30:00.000+00:00', capacity: 20 }
    , { destination: 'QAIA', origin: 'TUN', date: '2021-7-11T9:30:00.000+00:00', capacity: 8 }
    , { destination: 'QAIA', origin: 'FlySFO', date: '2021-5-5T2:30:00.000+00:00', capacity: 7 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-6-7T16:30:00.000+00:00', capacity: 19 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-3-15T2:30:00.000+00:00', capacity: 12 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-11-21T19:30:00.000+00:00', capacity: 20 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-10-16T2:30:00.000+00:00', capacity: 15 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-4-29T12:30:00.000+00:00', capacity: 15 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-8-4T9:30:00.000+00:00', capacity: 8 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-5-17T7:30:00.000+00:00', capacity: 13 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-10-13T17:30:00.000+00:00', capacity: 4 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-6-14T3:30:00.000+00:00', capacity: 11 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-2-4T2:30:00.000+00:00', capacity: 20 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-11-3T17:30:00.000+00:00', capacity: 20 }
    , { destination: 'TUN', origin: 'QAIA', date: '2021-11-11T0:30:00.000+00:00', capacity: 10 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-10-15T2:30:00.000+00:00', capacity: 7 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-4-5T17:30:00.000+00:00', capacity: 4 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-5-4T6:30:00.000+00:00', capacity: 13 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-11-8T7:30:00.000+00:00', capacity: 9 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-5-21T11:30:00.000+00:00', capacity: 4 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-10-24T21:30:00.000+00:00', capacity: 10 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-8-22T23:30:00.000+00:00', capacity: 4 }
    , { destination: 'TIP', origin: 'LCY', date: '2021-7-10T22:30:00.000+00:00', capacity: 16 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-5-8T10:30:00.000+00:00', capacity: 7 }
    , { destination: 'FlySFO', origin: 'TIP', date: '2021-9-12T19:30:00.000+00:00', capacity: 20 }
    , { destination: 'QAIA', origin: 'LCY', date: '2021-7-13T15:30:00.000+00:00', capacity: 17 }
    , { destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T17:30:00.000+00:00', capacity: 20 }
    , { destination: 'FlySFO', origin: 'LCY', date: '2021-4-28T10:30:00.000+00:00', capacity: 9 }
    , { destination: 'QAIA', origin: 'FlySFO', date: '2021-10-27T13:30:00.000+00:00', capacity: 20 }
    , { destination: 'LCY', origin: 'TUN', date: '2021-8-17T11:30:00.000+00:00', capacity: 7 }
    , { destination: 'TUN', origin: 'LCY', date: '2021-6-23T17:30:00.000+00:00', capacity: 6 }
    , { destination: 'TUN', origin: 'QAIA', date: '2021-1-15T0:30:00.000+00:00', capacity: 6 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-3-4T17:30:00.000+00:00', capacity: 18 }
    , { destination: 'FlySFO', origin: 'TUN', date: '2021-11-20T12:30:00.000+00:00', capacity: 12 }
    , { destination: 'TIP', origin: 'QAIA', date: '2021-2-22T0:30:00.000+00:00', capacity: 4 }
    , { destination: 'TIP', origin: 'TUN', date: '2021-2-30T9:30:00.000+00:00', capacity: 10 }
    , { destination: 'LCY', origin: 'QAIA', date: '2021-11-29T14:30:00.000+00:00', capacity: 19 }
    , { destination: 'QAIA', origin: 'FlySFO', date: '2021-5-19T22:30:00.000+00:00', capacity: 20 }
    , { destination: 'FlySFO', origin: 'TUN', date: '2021-6-8T16:30:00.000+00:00', capacity: 12 }
  ]










  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [date, setdate] = useState();
  const history = useHistory();

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
        console.log(result)
        setvalue(result.data);
        history.push(`${path} / Table`)

      });
  };



  return (
    <>
      <h1>just pick up your treavel with Travaleo</h1>
      <div className="home">
        <div className="bigContainer">
          <div id="container">
            <h1>origin</h1>
            <select id="origin" name="origin" onChange={(r) => { setOrigin(r.target.value) }} required>
              {
                destenations.map((item) => {
                  return <option value={item}>{item}</option>
                })
              }

            </select>
          </div>
          <div id="container">
            <h1>destination</h1>
            <select id="destination" name="destination" onChange={(r) => { setDestination(r.target.value) }} required>
              {
                origins.map((item) => {
                  return <option value={item}>{item}</option>
                })
              }

            </select>
          </div>
        </div>

        <h1>Date</h1>
        <label>from</label>
        <input className='dateInput' type="date" onChange={dd} />
        <label>to</label>
        <input className='dateInput' type="date" onChange={dd} />

        <button type="button" onClick={click}>
          Search
        </button>
      </div>
    </>
  );
};
