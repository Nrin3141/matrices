import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Matrix } from "./matrix";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Matrix />
      </header>
    </div>
  );
}

export default App;
