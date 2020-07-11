import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React-Typescript concepts</p>
      </header>
      <Home />
    </div>
  );
}

export default App;
