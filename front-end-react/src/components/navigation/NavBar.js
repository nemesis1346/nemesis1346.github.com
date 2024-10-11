import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//This is the proper way to use materialize css in react
import M from "materialize-css";
import {SPANISH_LANGUAGE,ENGLISH_LANGUAGE} from '../../constants/types';
import {setLanguage} from '../../actions/setConstantsActions';
import { connect } from "react-redux";

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
    onItemClick=(e)=>{
        this.props.setLanguage(e.currentTarget.firstChild.text);
    }
    render() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li onClick={this.onItemClick} ><a href="#!">{ENGLISH_LANGUAGE}</a></li>
                    <li onClick={this.onItemClick} ><a href="#!">{SPANISH_LANGUAGE}</a></li>
                </ul>
                <nav className="nav wrapper blue darken-3">
                    <div className="container">
                        <a className="brand-logo left">Marco Maigua</a>
                        <ul className="right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogFirebasePage">Blog</Link></li>
                            <li><Link to="/softwareProjectsPage">Software Projects</Link></li>
                            <li><Link to="/aboutMePage">About Me</Link></li>
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">{this.state.language}<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
//with Router is for givin the navbar the props input as a router
export default connect(null, {setLanguage})(NavBar);