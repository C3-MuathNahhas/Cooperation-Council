import React from "react";
import { Route } from "react-router-dom";
import { Home}  from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Route path="/home" component={Home} />
    </div>
  );
};

export default App;
