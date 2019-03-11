import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";
import BlogPage from './components/pages/BlogPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/blogPage" exact component={BlogPage} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
