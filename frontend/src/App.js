import React,{useState,createContext} from 'react';
import { Route,useRouteMatch} from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from "./components/auth/SignUp";

export const userContext=createContext();

const App = () => {
	let {path,url}=useRouteMatch()
	const[token,setToken]=useState()
	const state={token,setToken}
	return (
	<div className="App">
		
    <userContext.Provider value={state}>
	<Route path="/signup"component={SignUp} />
	<Route path= {`${path}/login`}component={Login}/>
	</userContext.Provider>

	
	

	</div>
	)
}


export default App;
