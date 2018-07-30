import React, { Component } from "react";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Home />
          <Blogs />
        </div>
      </div>
    );
  }
}

export default App;
