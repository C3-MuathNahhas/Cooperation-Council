import React, { useState } from "react";
import axios from "axios";
import "./MyBooking.css";

export const MyBooking = ({ book, state }) => {
  const [adults, setAdults] = useState();
  const [results, setresults] = useState();
  const [myBook, setMyBook] = useState();
  const click = () => {
    axios
      .get("http://localhost:5000/flightBooking/allBooking/", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        setMyBook(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleted = (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:5000/flightBooking/${e}`)
      .then((result) => {
        console.log("good");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateAduluts = (z) => {
    setAdults(z.target.value);
  };
  const updated = (e) => {
    console.log(e);
    axios
      .put(
        `http://localhost:5000/flightBooking/${e}`,
        { adults: adults },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((result) => {
        setresults("Number Of Adults Was Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("myBook", myBook);

  return (
    <div>
      <button className="btn2" onClick={click}>MyBooking</button>
      {myBook &&
        myBook.flightsBookings.map((element) => {
          return (
            <div>
              <div className="card">
                <div className="image"></div>
                <div className="text">
                  <span className="date">Your Book</span>
                  <h2 className="date">Date:{element.capacity}</h2>

                  <h2>Destination: distination</h2>
                  <p>Enter The Number Of New Adults</p>
                  <input type="number" onChange={updateAduluts} />
                  <br></br>
                  {results && <p>{results}</p>}
                  <button className="btn1" onClick={() => updated(element._id)}>
                    Update
                  </button>
                  <button className="btn1" onClick={() => deleted(element._id)}>
                    Delete
                  </button>
                </div>
                <div className="status">
                  <div className="stat">
                    <div className="value">Capacity</div>
                    <div className="type">capacity</div>
                  </div>
                  <div className="stat">
                    <div className="value">TotalPrice</div>
                    <div class="type">price$</div>
                  </div>
                  <div className="stat">
                    <div className="value">Adults</div>
                    <div class="type">?</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
