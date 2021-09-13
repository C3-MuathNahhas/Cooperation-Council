import React, { useState, createContext } from "react";
import { Route, useRouteMatch, Switch ,useHistory} from "react-router-dom";
import { Home } from "./components/Home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Navigation from "../src/components/navigation/Navigation";
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
		  <Route  path={`${path}/Table`} render={() => <Table value={values} />} />
        </userContext.Provider>
		
            
          
      </Switch>
    </div>
  );
};

export default App;
