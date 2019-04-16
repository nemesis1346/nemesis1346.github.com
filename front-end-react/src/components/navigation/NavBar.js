import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//This is the proper way to use materialize css in react
import M from "materialize-css";

class NavBar extends React.Component {
    state={
        "language":'Language'
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }
    render() {
        return (
            <div>
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#!">Español</a></li>
                    <li><a href="#!">English</a></li>
                </ul>
                <nav className="nav wrapper blue darken-3">
                    <div className="container">
                        <a className="brand-logo">Marco Maigua</a>
                        <ul className="right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogFirebasePage">Blog</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">{this.state.language}<i class="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
//with Router is for givin the navbar the props input as a router
export default withRouter(NavBar);