import React, { useState, useEffect } from "react";
import "./attractions.css";
import Modal from "./modal";

function Attractions() {
  const [imgSrc, setSrc] = useState(0);
  const [modalSrc, setModalsrc] = useState("");

  const attractionsSrc = [
    {
      name: "paris",
      src: "https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700_960_720.jpg",
    },
    {
      name: "norway",
      src: "https://cdn.pixabay.com/photo/2015/05/18/23/53/backpacker-772991_960_720.jpg",
    },
    {
      name: "Tokyo",
      src: "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_960_720.jpg",
    },
    {
      name: "Sydney",
      src: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_960_720.jpg",
    },
    {
      name: "Phuket_Province",
      src: "https://cdn.pixabay.com/photo/2017/06/19/14/10/thailand-2419443_960_720.jpg",
    },
    {
      name: "dubai",
      src: "https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg",
    },
    {
      name: "london",
      src: "https://cdn.pixabay.com/photo/2015/09/18/11/47/london-eye-945497_960_720.jpg",
    },
    {
      name: "Venice",
      src: "https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg",
    },
    {
      name: "Istanbul",
      src: "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
    },
    {
      name: "San_Francisco",
      src: "https://cdn.pixabay.com/photo/2016/01/19/17/51/golden-gate-bridge-1149942_960_720.jpgpg",
    },
  ];
  const clickHandler = () => {
    setModalsrc(attractionsSrc[imgSrc]);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setSrc((prevState) => (prevState < 9 ? prevState + 1 : 0));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hideBack = (hide) => {
    setModalsrc(hide);
  };
  return (
    <div className="attractions_div">
      <h1>Find More Attractions </h1>
      <img
        className="attractions_img"
        onClick={clickHandler}
        src={`${attractionsSrc[imgSrc].src}`}
      ></img>
      <Modal hideBack={hideBack} src={modalSrc}></Modal>
    </div>
  );
}
export default Attractions;
