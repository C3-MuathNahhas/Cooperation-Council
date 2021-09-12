import React, { useState, createContext } from "react";
import { Route,useRouteMatch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Table from "./components/ui/Table";
import Login from './components/auth/Login';
import SignUp from "./components/auth/SignUp";
import Navigation from "../src/components/navigation/Navigation";
export const userContext=createContext();
export const UserContext = createContext();
const App = () => {
  const [value, setvalue] = useState();
  let {path,url}=useRouteMatch()
	const[token,setToken]=useState()
	const state={token,setToken}
  return (
    <div className="App">
		<switch>
      <Route path="/home" render={() => <Home setvalue={setvalue} />} />
      <UserContext.Provider value={value}>
        <Route path="/flightTable" component={Table}/>
      </UserContext.Provider>
	  <userContext.Provider value={state}>
	<Navigation/>
<Route path={`${path}/signUp`}component={SignUp} />
<Route path= {`${path}/login`}component={Login}/>

</userContext.Provider>
	  </switch>
    </div>
	
  );
};

export default App;
