import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom"; // Import Routes
import NavBar from "./components/navigation/NavBar";
import HomePage from "./components/pages/HomePage";
import BlogFirebasePage from './components/pages/BlogFirebasePage';
import BlogDjangoPage from './components/pages/BlogDjangoPage';
import SoftwareProjectsPage from './components/pages/SoftwareProjectsPage';
import WebDesignProjectsPage from './components/pages/WebDesignProjectsPage';
import CarouselPage from './components/pages/CarouselPage';
import AboutMePage from './components/pages/AboutMePage';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes> {/* Wrap Routes inside Routes */}
            <Route path="/" element={<HomePage />} /> {/* Use element prop */}
            <Route path="/blogFirebasePage" element={<BlogFirebasePage />} />
            <Route path="/blogDjangoPage" element={<BlogDjangoPage />} />
            <Route path="/softwareProjectsPage" element={<SoftwareProjectsPage />} />
            <Route path="/webDesignProjectsPage" element={<WebDesignProjectsPage />} />
            <Route path="/aboutMePage" element={<AboutMePage />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="*" element={<HomePage />} /> {/* Fallback route */}
          </Routes> {/* End of Routes */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
