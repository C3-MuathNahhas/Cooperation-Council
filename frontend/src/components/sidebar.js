import React from "react";
import Weather from "./ui/weather";
import Prayertime from "./ui/prayertime";
import Adds from "./ui/adds";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar_div"></div>
      <Weather></Weather>
      <Prayertime></Prayertime>
      {/* <Adds></Adds> */}
    </div>
  );
}

export default Sidebar;
//new
