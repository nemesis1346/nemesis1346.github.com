import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//This is the proper way to use materialize css in react
import M from "materialize-css";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';
import { setLanguage } from '../../actions/setConstantsActions';
import { connect } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import '../styles/navbar.css'

class NavBar extends React.Component {
    state = {
        "language": 'Language'
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }
    onItemClick = (e) => {
        this.props.setLanguage(e.currentTarget.firstChild.text);
    }
    render() {
        return (
            <nav className='blue darken-3'>
                <div className='navbar-container'>
                    <a to='#/' className='navbar-brand'>Marco Maigua</a>

                    <ul className="navbar-links">
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/softwareProjectsPage">Software Projects</a></li>
                        <li><a href="#/webDesignProjectsPage">WebDesign Projects</a></li>
                        <li><a href="#/blogFirebasePage">Blog</a></li>
                        {/* <li><Link to="/aboutMePage">About Me</Link></li> */}

                        {/* <li className='dropdown'>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">{this.state.language}<i className="material-icons right">arrow_drop_down</i></a>
                            <ul id="dropdown1" className="dropdown-content">
                                <li onClick={this.onItemClick} ><a href="#!">{ENGLISH_LANGUAGE}</a></li>
                                <li onClick={this.onItemClick} ><a href="#!">{SPANISH_LANGUAGE}</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}


//with Router is for givin the navbar the props input as a router
export default connect(null, { setLanguage })(NavBar);