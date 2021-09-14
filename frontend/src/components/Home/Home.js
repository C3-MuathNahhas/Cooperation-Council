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
  // [
  //   { destination: 'QAIA', origin: 'LCY', date: '2021-11-26T13:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T20:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T7:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'TUN', origin: 'TIP', date: '2021-11-26T5:30:00.000+00:00', capacity: 12 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T3:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'FlySFO', origin: 'TUN', date: '2021-11-26T5:30:00.000+00:00', capacity: 17 }
  //   , { destination: 'LCY', origin: 'QAIA', date: '2021-11-26T4:30:00.000+00:00', capacity: 18 }
  //   , { destination: 'QAIA', origin: 'QAIA', date: '2021-11-26T3:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T5:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'QAIA', origin: 'LCY', date: '2021-11-26T10:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T7:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'FlySFO', origin: 'TUN', date: '2021-11-26T2:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T3:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'TIP', origin: 'LCY', date: '2021-11-26T16:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'TIP', origin: 'TIP', date: '2021-11-26T11:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'QAIA', origin: 'LCY', date: '2021-11-26T6:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'QAIA', origin: 'QAIA', date: '2021-11-26T6:30:00.000+00:00', capacity: 17 }
  //   , { destination: 'LCY', origin: 'QAIA', date: '2021-11-26T18:30:00.000+00:00', capacity: 16 }
  //   , { destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T5:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'LCY', origin: 'QAIA', date: '2021-11-26T12:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'TIP', origin: 'FlySFO', date: '2021-11-26T23:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'QAIA', origin: 'TUN', date: '2021-11-26T8:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'FlySFO', origin: 'TIP', date: '2021-11-26T22:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'TUN', origin: 'QAIA', date: '2021-11-26T7:30:00.000+00:00', capacity: 17 }
  //   , { destination: 'LCY', origin: 'FlySFO', date: '2021-11-26T18:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T20:30:00.000+00:00', capacity: 19 }
  //   , { destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T16:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'TIP', origin: 'TIP', date: '2021-11-26T11:30:00.000+00:00', capacity: 6 }
  //   , { destination: 'TUN', origin: 'TUN', date: '2021-11-26T1:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'LCY', origin: 'TUN', date: '2021-11-26T6:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'TIP', origin: 'TUN', date: '2021-11-26T19:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'TIP', origin: 'FlySFO', date: '2021-11-26T7:30:00.000+00:00', capacity: 16 }
  //   , { destination: 'QAIA', origin: 'TIP', date: '2021-11-26T15:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'TUN', origin: 'TIP', date: '2021-11-26T22:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T0:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'QAIA', origin: 'FlySFO', date: '2021-11-26T7:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'TIP', origin: 'TUN', date: '2021-11-26T8:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'TUN', origin: 'QAIA', date: '2021-11-26T10:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'LCY', origin: 'FlySFO', date: '2021-11-26T16:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T10:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'TIP', origin: 'TIP', date: '2021-11-26T0:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'TIP', origin: 'LCY', date: '2021-11-26T0:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'FlySFO', origin: 'TIP', date: '2021-11-26T18:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T12:30:00.000+00:00', capacity: 4 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T7:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T20:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'LCY', origin: 'TUN', date: '2021-11-26T0:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T13:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'LCY', origin: 'TUN', date: '2021-11-26T2:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'QAIA', origin: 'TIP', date: '2021-11-26T0:30:00.000+00:00', capacity: 4 }
  //   , { destination: 'QAIA', origin: 'QAIA', date: '2021-11-26T15:30:00.000+00:00', capacity: 19 }
  //   , { destination: 'FlySFO', origin: 'TUN', date: '2021-11-26T5:30:00.000+00:00', capacity: 6 }
  //   , { destination: 'TUN', origin: 'FlySFO', date: '2021-11-26T11:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'QAIA', origin: 'TIP', date: '2021-11-26T10:30:00.000+00:00', capacity: 16 }
  //   , { destination: 'LCY', origin: 'FlySFO', date: '2021-11-26T12:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'TIP', origin: 'LCY', date: '2021-11-26T14:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T14:30:00.000+00:00', capacity: 19 }
  //   , { destination: 'TIP', origin: 'TIP', date: '2021-11-26T6:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'QAIA', origin: 'FlySFO', date: '2021-11-26T18:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T1:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'TUN', origin: 'FlySFO', date: '2021-11-26T6:30:00.000+00:00', capacity: 6 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T20:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T12:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'QAIA', origin: 'FlySFO', date: '2021-11-26T2:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T22:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'QAIA', origin: 'TIP', date: '2021-11-26T10:30:00.000+00:00', capacity: 18 }
  //   , { destination: 'QAIA', origin: 'LCY', date: '2021-11-26T17:30:00.000+00:00', capacity: 4 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T22:30:00.000+00:00', capacity: 16 }
  //   , { destination: 'QAIA', origin: 'QAIA', date: '2021-11-26T23:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'LCY', origin: 'FlySFO', date: '2021-11-26T0:30:00.000+00:00', capacity: 19 }
  //   , { destination: 'TUN', origin: 'QAIA', date: '2021-11-26T21:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T1:30:00.000+00:00', capacity: 16 }
  //   , { destination: 'QAIA', origin: 'TUN', date: '2021-11-26T18:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'FlySFO', origin: 'QAIA', date: '2021-11-26T6:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'FlySFO', origin: 'TUN', date: '2021-11-26T9:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T5:30:00.000+00:00', capacity: 9 }
  //   , { destination: 'TIP', origin: 'TIP', date: '2021-11-26T5:30:00.000+00:00', capacity: 14 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T4:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'TIP', origin: 'LCY', date: '2021-11-26T17:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'FlySFO', origin: 'LCY', date: '2021-11-26T10:30:00.000+00:00', capacity: 13 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T16:30:00.000+00:00', capacity: 15 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T22:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'QAIA', origin: 'QAIA', date: '2021-11-26T14:30:00.000+00:00', capacity: 4 }
  //   , { destination: 'LCY', origin: 'TIP', date: '2021-11-26T7:30:00.000+00:00', capacity: 10 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T6:30:00.000+00:00', capacity: 6 }
  //   , { destination: 'LCY', origin: 'TUN', date: '2021-11-26T20:30:00.000+00:00', capacity: 8 }
  //   , { destination: 'FlySFO', origin: 'FlySFO', date: '2021-11-26T18:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T13:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T7:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'TUN', origin: 'TUN', date: '2021-11-26T18:30:00.000+00:00', capacity: 7 }
  //   , { destination: 'LCY', origin: 'QAIA', date: '2021-11-26T20:30:00.000+00:00', capacity: 6 }
  //   , { destination: 'TIP', origin: 'QAIA', date: '2021-11-26T4:30:00.000+00:00', capacity: 12 }
  //   , { destination: 'TUN', origin: 'LCY', date: '2021-11-26T5:30:00.000+00:00', capacity: 12 }
  //   , { destination: 'TIP', origin: 'LCY', date: '2021-11-26T20:30:00.000+00:00', capacity: 19 }
  //   , { destination: 'TUN', origin: 'TIP', date: '2021-11-26T0:30:00.000+00:00', capacity: 11 }
  //   , { destination: 'QAIA', origin: 'TIP', date: '2021-11-26T3:30:00.000+00:00', capacity: 5 }
  //   , { destination: 'LCY', origin: 'FlySFO', date: '2021-11-26T11:30:00.000+00:00', capacity: 20 }
  //   , { destination: 'FlySFO', origin: 'TIP', date: '2021-11-26T5:30:00.000+00:00', capacity: 9 }]

  // let flights2 = [];
  // let des = [];
  // for (let i = 0; i < 98; i++) {
  //   flights2.push({
  //     destination: des[getRandomNum(0, 4)]
  //     , origin: des[getRandomNum(0, 4)]
  //     , date: `2021-${getRandomNum(1, 12)}-${getRandomNum(1, 30)}T${getRandomNum(0, 23)}:30:00.000+00:00`, capacity: getRandomNum(4, 20)
  //   })
  // }
  const getRandomNum=(min,max)=>{
    return Math.floor( Math.random(0,10)*10)
    }

  /*destination:"DXB"
  origin:"AMM"
  date:2021-11-26 T12:30:00.000+00:00
  capacity:5
  */

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
