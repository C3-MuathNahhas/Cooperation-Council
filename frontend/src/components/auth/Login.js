import React, { useState, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../App";
import "../auth/Login.css"
import { userSign } from "../../App"



const Login = () => {
  const newSign=useContext(userSign)
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const [email, setEmail] = useState(newSign.email);
  const [password, setPassword] = useState(newSign.password);
  const newUser = useContext(userContext);
  const [err, setErr] = useState();
 
  console.log(newSign)
  return (
    <div className="login">
      <h2 className="header-login">login</h2>
      <input
        type="email"
        placeholder="email here"
        className="email-login"
        defaultValue={newSign.email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(e.target.value)
        }}
      />
      <input
        type="password"
        placeholder="password here"
       defaultValue={newSign.password}
        className="password-login"
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(e.target.value)
        }}
      />
      <button
          className="btn-login"
        onClick={() => {
          console.log(email,password)
          axios
            .post("http://localhost:5000/login", { email, password })
            .then((result) => {
              if (!result.data.token) {
                setErr(result.data);
              } else {
                console.log(result);
                console.log(result.data.token);
                newUser.setToken(result.data.token);
                history.push(`${path}/home`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        login
      </button>
      {err}
    </div>
  );
};

export default Login;
