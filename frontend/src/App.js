import React, { useState, createContext } from "react";
import { Route, useRouteMatch, Switch, useHistory } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Navigation from "../src/components/navigation/Navigation";
import Weather from "../src/components/ui/weather";
import Attractions from "../src/components/ui/attractions";
import Cities from "../src/components/ui/cities";
import Footer from "../src/components/footer/footer";

export const userContext = createContext();

const App = () => {
  const [values, setvalues] = useState();
  let { path, url } = useRouteMatch();
  const [token, setToken] = useState();
  const state = { token, setToken };

  return (
    <div className="App">
      <Switch>
        <userContext.Provider value={state}>
          <Navigation />
          <Route exact path={`${path}/signUp`} component={SignUp} />
          <Route exact path={`${path}/login`} component={Login} />
          <Route
            path={`${path}/home`}
            render={() => <Home setvalue={setvalues} />}
          />
          {console.log(values)}
          <Route
            path={`${path}/Table`}
            render={() => <Table value={values} state={state} />}
          />
        </userContext.Provider>
      </Switch>
      <Route path={`${path}/mainPage`} component={Weather}></Route>
      <Route path={`${path}/mainPage`} component={Cities}></Route>
      <Route path={`${path}/mainPage`} component={Attractions}></Route>
      <Route path={`${path}/mainPage`} component={Footer}></Route>
    </div>
  );
};

export default App;
