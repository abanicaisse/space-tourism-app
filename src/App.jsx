import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home, Crew, Destination, Technology } from "./pages";
import {
  CrewComponent,
  DestinationComponent,
  Navbar,
  TechnologyComponent,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
