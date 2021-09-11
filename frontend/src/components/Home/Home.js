import React from "react";
import axios from "axios";

export const Home = () => {
  return (
    <div>
      <select>
       { axios.get("http://localhost:5000/flights/search").then((result)=>{
       <div>
        <option>{result.from}</option>
        <option>{result.to}</option>
        <option>{result.date}</option>
        <option>{result.from}</option>
        </div>
        })
        }
      </select>
    </div>
  );
};
