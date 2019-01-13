import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Marco Maigua</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    );
}
//with Router is for givin the navbar the props input as a router
export default withRouter(NavBar);