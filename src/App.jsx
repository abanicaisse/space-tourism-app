import React from "react";
import { Crew, Destination, Technology } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <h1>APPLICATION VIEW</h1>
        <Crew />
        <Destination />
        <Technology />
      </div>
    </div>
  );
};

export default App;
