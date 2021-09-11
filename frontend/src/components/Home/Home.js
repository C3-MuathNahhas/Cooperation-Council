import React,{useState} from "react";
import axios from "axios";

export const Home = () => {
    const [flight,setflight]=useState()
    axios.get("http://localhost:5000/flights/search").then((result)=>{
        setflight(result)
         })
  return (
    <div>
      <select>
      {flight&&flight.map((element)=>{
          return(
              <div>
                  
              </div>
          )
      })}
        
      </select>
    </div>
  );
};
