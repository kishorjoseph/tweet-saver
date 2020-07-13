import React from "react";
import logo from "./logo.svg";
import ToDo from "./pages/ToDoHome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To do App</p>
      </header>
      <ToDo />
    </div>
  );
}

export default App;
