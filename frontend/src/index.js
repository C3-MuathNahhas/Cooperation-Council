import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 9b5184667958fb9ea5ea63caa3ae5d0b0b426c61
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/main" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
