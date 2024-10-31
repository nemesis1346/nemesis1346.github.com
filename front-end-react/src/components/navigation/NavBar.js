import React, { forwardRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
//This is the proper way to use materialize css in react
import M from "materialize-css";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';
import { setLanguage } from '../../actions/setConstantsActions';
import { connect } from "react-redux";
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import '../styles/navbar.css'

class NavBar extends React.Component {
    collapseRef = React.createRef()
    state = {
        "language": 'Language'
    }

    handleToggle = () => {
        // Call onToggle to notify App component about navbar state
        const { isNavbarOpen, onToggle, updateMarginTop } = this.props
        onToggle()

        //use a timeout to wait for the collapse animation to finish before calculating height
        setTimeout(() => {
            const height = isNavbarOpen ? 0 : this.collapseRef.current.offsetHeight
            // console.log('Is Navbar open?')
            // console.log(isNavbarOpen)
            // console.log('Calculating height')
            // console.log(height)
            updateMarginTop(height)
        }, 300) //Adjust the timeout duration as per the animation speed
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }
    // onItemClick = (e) => {
    //     this.props.setLanguage(e.currentTarget.firstChild.text);
    // }
    render() {
        return (
            <Navbar expand='lg' className='blue darken-3' onToggle={this.handleToggle}>
                <Container className='navbar-container'>
                    <Navbar.Brand as={Link} to='/' className='navbar-brand'>Marco Maigua</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav" ref={this.collapseRef} className={this.props.isNavbarOpen ? "show" : ""}>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/softwareProjectsPage">Software Projects</Nav.Link>
                            <Nav.Link as={Link} to="/webDesignProjectsPage">WebDesign Projects</Nav.Link>
                            <Nav.Link as={Link} to="/blogFirebasePage">Blog</Nav.Link>
                            {/* <li><Link to="/aboutMePage">About Me</Link></li> */}

                            {/* <li className='dropdown'>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">{this.state.language}<i className="material-icons right">arrow_drop_down</i></a>
                            <ul id="dropdown1" className="dropdown-content">
                                <li onClick={this.onItemClick} ><a href="#!">{ENGLISH_LANGUAGE}</a></li>
                                <li onClick={this.onItemClick} ><a href="#!">{SPANISH_LANGUAGE}</a></li>
                            </ul>
                        </li> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}
//with Router is for givin the navbar the props input as a router
export default connect(null, { setLanguage })(NavBar);