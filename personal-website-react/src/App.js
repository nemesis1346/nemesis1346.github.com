import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    );
  }
}

export default App;
