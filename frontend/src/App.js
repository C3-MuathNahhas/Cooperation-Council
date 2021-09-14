import React, { useState, createContext } from "react";
import { Route,useRouteMatch } from "react-router-dom";
//import { Home } from "./components/Home/Home";
//import Table from "./components/ui/Table";
import Login from './components/auth/Login';
import SignUp from "./components/auth/SignUp";
import Navigation from "../src/components/navigation/Navigation";
import About from "./components/About/About";
import "./App.css";
import Contact from "./components/contact/Contact";
export const userContext=createContext();
export const UserContext = createContext();
const App = () => {
  const [value, setvalue] = useState();
  let {path,url}=useRouteMatch()
	const[token,setToken]=useState()
	const state={token,setToken}
	return (
	<div className="App">
		
    <userContext.Provider value={state}>
		<Navigation/>
	<Route path={`${path}/signUp`}component={SignUp} />
	<Route path= {`${path}/login`}component={Login}/>
	<Route path={`${path}/contact`}component={Contact} />
	<Route path={`${path}/about`}component={About} />

	</userContext.Provider>


	  </div>
	
  );
};

export default App;
