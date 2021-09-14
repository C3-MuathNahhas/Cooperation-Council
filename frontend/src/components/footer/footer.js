import React from "react";
import "./footer.css";
import {
  faFacebookF,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faFacebookF} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faTwitterSquare} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faLinkedin} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faInstagram} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faYoutubeSquare} />
      </div>
      <br />
      <br />

      <div className="footer_links">
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Trevaleo Business Studio</a>
          </li>
          <a>Trevaleo Magazine</a>
          <li></li>
        </ul>
        <ul>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>Terms and conditions</a>
          </li>

          <li>
            <a>Legal information</a>
          </li>
        </ul>
      </div>
      <h1>trevaleo</h1>
      <h6>Copyright 2021 trevaleo | All rights reserved.</h6>
    </div>
  );
};

export default Footer;
