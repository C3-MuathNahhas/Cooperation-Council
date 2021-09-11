import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [flight, setflight] = useState();

  var options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list",
    params: {
      location_id: "293919",
      adults: "1",
      rooms: "1",
      nights: "2",
      offset: "0",
      currency: "USD",
      order: "asc",
      limit: "30",
      sort: "recommended",
      lang: "en_US",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "8445521e28mshff86c1ecb0006e7p1c6694jsnf4eefd40292a",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setflight(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div>
      
      <select>
        {flight &&
          flight.map((element, index) => {
            return (
              
                <option>{element.name}</option>
              
            );
          })}
      </select><br/><br/>

      <input type="date" /><br/><br/>
      <input type="date" /><br/><br/>
    </div>
  );
};
