import React, { useState, useEffect } from "react";
import "./adds.css";
//new
function Adds() {
  const [imgSrc, setSrc] = useState(0);
  const adds = [
    "https://cdn.pixabay.com/photo/2015/09/09/20/33/basketball-933173_960_720.jpg",
    "http://www.vancouverdealsblog.com/wp-content/uploads/2013/01/Adidas-30-50-Off-End-of-Season-Clearance-Extra-20-Off-Sale-Items.jpg",
    "https://ak.picdn.net/shutterstock/videos/1007551879/thumb/1.jpg",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setSrc((prevState) => (prevState < 2 ? prevState + 1 : 0));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="adds_div">
      <img className="adds_img" src={`${adds[imgSrc]}`}></img>
    </div>
  );
}
export default Adds;
