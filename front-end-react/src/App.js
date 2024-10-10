import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Import Routes
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";
import BlogFirebasePage from './components/pages/BlogFirebasePage';
import BlogDjangoPage from './components/pages/BlogDjangoPage';
import ProjectsPage from './components/pages/ProjectsPage';
import CarouselPage from './components/pages/CarouselPage';
import AboutMePage from './components/pages/AboutMePage';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar />
          <Routes> {/* Wrap Routes inside Routes */}
            <Route path="/" element={<HomePage />} /> {/* Use element prop */}
            <Route path="/blogFirebasePage" element={<BlogFirebasePage />} />
            <Route path="/blogDjangoPage" element={<BlogDjangoPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutMe" element={<AboutMePage />} />
            <Route path="/carousel" element={<CarouselPage />} />
          </Routes> {/* End of Routes */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
