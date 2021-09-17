import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";
import { CgLogIn } from "react-icons/cg";
import { BiUserPlus } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import "../navigation/navigation.css";
import { GiPlanePilot } from "react-icons/gi";

const Navigation = () => {
  let { path, url } = useRouteMatch();
  const user = useContext(userContext);
  return (
    <div className="nav_div">
      {!user.token ? (
        <div className="nav">
          <label style={{ fontSize: "20px", textAlign: "center" }}>
            <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
            <span style={{ color: "rgb(252,158,21)" }}>val</span>
            <GiPlanePilot style={{ fontSize: "3vw" }} />
            <span style={{ color: "rgb(227,64,61)" }}>eo</span>
          </label>
          <Link to={`${url}/about`} className="about">
            About
          </Link>
          <Link to={`${url}/contact`} className="contac">
            <MdContactPhone
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />{" "}
            Contact
          </Link>
          <Link to={`${url}/signUp`} className="sign">
            <BiUserPlus
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />{" "}
            signUp
          </Link>
          <Link to={`${url}/login`} className="log">
            <CgLogIn style={{ fontSize: "1.1vw", verticalAlign: "middle" }} />{" "}
            Login
          </Link>
        </div>
      ) : (
        <div className="nav">
          <label style={{ fontSize: "20px", textAlign: "center" }}>
            <span style={{ color: "rgb(19,145,210)" }}>Tra</span>
            <span style={{ color: "rgb(252,158,21)" }}>val</span>
            <GiPlanePilot style={{ fontSize: "3vw", color: "white" }} />
            <span style={{ color: "rgb(227,64,61)" }}>eo</span>
          </label>
          <Link to={`${url}/logout`}>LogOut</Link>
          <Link to={`${url}/home`} className="hme">
            Home
          </Link>
          <Link to={`${url}/Table`} className="tab">
            Table
          </Link>
          <Link to={`${url}/Update`} className="updat">
            Update
          </Link>
          <Link to={`${url}/myBooking`} >Mybooking
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
