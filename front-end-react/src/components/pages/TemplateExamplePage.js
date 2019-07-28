import React from "react";
import { connect } from "react-redux";
import {
    getMediumLogo
} from "../../actions/professionalFirebaseActions";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';
import "../styles/homePage.css";
import 'materialize-css/dist/css/materialize.min.css';
// import M from "materialize-css";



class TemplageExamplePage extends React.Component {
    componentWillMount() {

    }

    componentDidMount() {
        // M.AutoInit();
    }

    render() {
        return (
            <div >

                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/1" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://lorempixel.com/580/250/nature/2" />
                            <div className="caption left-align">
                                <h3>Left Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                    </ul>
                </div>


                <div class="container">
                    <div class="section">

                        <div class="row">
                            <div class="col s12 m4">
                                <div class="icon-block">
                                    <h2 class="center light-blue-text"><i class="fa fa-connectdevelop"></i></h2>
                                    <h5 class="center">Feature one</h5>

                                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            	</p>
                                </div>
                            </div>

                            <div class="col s12 m4">
                                <div class="icon-block">
                                    <h2 class="center light-blue-text"><i class="fa fa-user-plus"></i></h2>
                                    <h5 class="center">Feature two</h5>

                                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            	</p>
                                </div>
                            </div>

                            <div class="col s12 m4">
                                <div class="icon-block">
                                    <h2 class="center"><i class="fa fa-cogs"></i></h2>
                                    <h5 class="center">Feature three</h5>

                                    <p class="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            	</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br></br>

                    <div class="section">

                    </div>
                </div>

                <footer class="page-footer orange darken-3">
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
      </div>
                    </div>
                </footer>

            </div>
        );
    }
}

const mapStateToPropsHomePage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        professionalProfilePhoto:
            state.professionalPageReducer.professionalProfilePhoto,
    };
};

// export default connect(
//     mapStateToPropsHomePage,
//     {
//         getProfessionalImage,
//     }
// )(HomePage);


export default TemplageExamplePage;
