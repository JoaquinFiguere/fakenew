import React from "react";
import ReactDOM from "react-dom";
import MiCompPolitica from "./MiCompDeporte";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompDeporte />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  