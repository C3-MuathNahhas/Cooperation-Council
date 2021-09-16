import React from "react";
import Weather from "./ui/weather";

import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar_div"></div>
      <Weather></Weather>
    </div>
  );
}

export default Sidebar;
