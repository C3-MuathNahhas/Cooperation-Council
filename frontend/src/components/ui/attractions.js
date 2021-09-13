import React, { useState, useEffect } from "react";
import "./attractions.css";

function Attractions() {
  const [imgSrc, setSrc] = useState(0);
  const attractionsSrc = [
    "https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_960_720.jpg",
    "https://cdn.pixabay.com/photo/2012/08/03/01/26/sandstones-53637_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/09/18/11/47/london-eye-945497_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/06/28/15/32/venice-2451047_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/11/16/18/56/building-1046188_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/06/13/11/22/golden-gate-bridge-4271364_960_720.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSrc((prevState) => (prevState < 9 ? prevState + 1 : 0));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="attractions_div">
      <h1>Find More Attractions </h1>
      <img src={`${attractionsSrc[imgSrc]}`}></img>
    </div>
  );
}
export default Attractions;
