import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Table from "./components/ui/Table";

const App = () => {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
      <Table></Table>
    </div>
  );
};

export default App;
