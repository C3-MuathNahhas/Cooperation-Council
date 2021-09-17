import React, { useState, createContext } from "react";
import Home from "./components/Home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import logOut from "./components/logout/logOut";

import Navigation from "../src/components/navigation/Navigation";
import About from "./components/about/About";
import "./App.css";
import { Route, useRouteMatch, Switch, useHistory } from "react-router-dom";
import Weather from "../src/components/ui/weather";
import Attractions from "../src/components/ui/attractions";
import Cities from "../src/components/ui/cities";
import Footer from "../src/components/footer/footer";
import { UpdateFlightBooking } from "./components/updateFlightBooking/UpdateFlightBooking";
import Contact from "./components/contact/Contact";
import SideBar from "./components/sidebar";
import { MyBooking } from "./components/myBooking/MyBooking";
import { GiExplosiveMaterials } from "react-icons/gi";
export const userSign=createContext();
export const userContext = createContext();
const App = () => {
  const [adult, setadult] = useState();
  const [values, setvalues] = useState();
  let { path, url } = useRouteMatch();
  const [token, setToken] = useState();
  const state = { token, setToken };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App-s">
      <MyBooking/>
      <div className="App">
        <Switch>
          <userContext.Provider value={state}>
            <Navigation />

            <div className="navPlus" />
            <Route
              path={`${path}/Update`}
              render={() => (
                <UpdateFlightBooking value={values} state={state} />
              )}
            />
           

            <userSign.Provider value={{email, password,setEmail,setPassword}}>
              <Route path={`${path}/signUp`} component={SignUp} />
              <Route path={`${path}/login`} component={Login} />
              <Route path={`${path}/logout` }component={logOut}/>

            </userSign.Provider>

            <Route path={`${path}/contact`} component={Contact} />
            <Route path={`${path}/About`} component={About} />
            <Route
              path={`${path}/home`}
              render={() => <Home setvalue={setvalues} setadult={setadult} />}
            />
            <Route
              path={`${path}/Table`}
              render={() => <Table value={values} state={state} adult={adult} />}
            />
            {/* <Route exact path={path} component={Weather}></Route> */}
        <Route exact path={path} component={Cities}></Route>
        <Route exact path={path} component={Attractions}></Route>
        <Route exact path={path} component={SideBar}></Route>
          </userContext.Provider>
        </Switch>
        
        <Footer/>

      </div>
    </div>
  );
};
export default App;
