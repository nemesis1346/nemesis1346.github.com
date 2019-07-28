import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";
import BlogFirebasePage from './components/pages/BlogFirebasePage';
import BlogDjangoPage from './components/pages/BlogDjangoPage';
import ProjectsPage from './components/pages/ProjectsPage';
import 'materialize-css/dist/css/materialize.min.css';
import TemplageExamplePage from './components/pages/TemplateExamplePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/blogFirebasePage" exact component={BlogFirebasePage} />
          <Route path = "/blogDjangoPage" exact component = {BlogDjangoPage}></Route>
          <Route path = '/projects' exact component = {ProjectsPage}></Route>
          <Route path = '/templateExamplePage' exact component = {TemplageExamplePage}></Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
