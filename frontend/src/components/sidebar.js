import React from "react";
import Weather from "./ui/weather";
import Prayertime from "./ui/prayertime";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar_div"></div>
      <Weather></Weather>
      <Prayertime></Prayertime>
    </div>
  );
}

export default Sidebar;
