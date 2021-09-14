import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";

import "../navigation/navigation.css";
const Navigation = () => {
  let { path, url } = useRouteMatch();
  const user = useContext(userContext);
  return (
    <div>
      {!user.token ? (
        <div className="nav">
          <label className="logo"> traveleo</label>
          <Link to={`${url}/about`} className="about">
            About
          </Link>
          <Link to={`${url}/contact`} className="contac">
            Contact
          </Link>
          <Link to={`${url}/signUp`} className="sign">
            signUp
          </Link>
          <Link to={`${url}/login`} className="log">
            Login
          </Link>
        </div>
      ) : (
        <div className="nav">
          <Link to={`${url}/home`}>home</Link>
          <Link to={`${url}/Table`}>Table</Link>
          <Link to={`${url}/Update`}>update</Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
