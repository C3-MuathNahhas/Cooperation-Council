import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Table from "./components/ui/Table";

export const UserContext = createContext();
const App = () => {
  const [value, setvalue] = useState();
  return (
    <div className="App">
      <Route path="/home" render={() => <Home setvalue={setvalue} />} />
      <UserContext.Provider value={value}>
        <Table></Table>
      </UserContext.Provider>
    </div>
  );
};

export default App;
