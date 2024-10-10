import React from "react";
import { connect } from "react-redux";
import {
  getProfessionalContent,
  getLinkedinLogo,
  getGithubLogo,
  getGitlabLogo,
  getMediumLogo
} from "../../actions/professionalFirebaseActions";
import * as CONSTANTS from '../../constants/types';
import "../styles/homePage.css";
import { Image } from 'react-bootstrap';


class HomePage extends React.Component {

  componentWillMount() {
    this.props.getProfessionalContent();
    this.props.getLinkedinLogo();
    this.props.getLinkedinLogo();
    this.props.getGithubLogo();
    this.props.getGitlabLogo();
    this.props.getMediumLogo();
  }
  render() {
    const {
      professionalProfilePhoto,
      professionalProfileContent,
      linkedinLogo,
      githubLogo,
      gitlabLogo,
      mediumLogo
    } = this.props;

    let language = this.props.language;
    let content = "Loading";
    if (professionalProfileContent) {
      switch (language) {
        case CONSTANTS.SPANISH_LANGUAGE:
          content = professionalProfileContent.Spanish;
          break;
        case CONSTANTS.ENGLISH_LANGUAGE:
          content = professionalProfileContent.English;
          break;
        default:
          content = professionalProfileContent.English;
          break;
      }
    }

    return (

      <div className="home-page-container">
        <div className="col-center">
          <img src="https://storage.cloud.google.com/cms-personal.appspot.com/photos/professional/professionalImage3.jpg" />

        </div>


        <div className="container">
          <p>{content}</p>
          <div className="social-media-container">
            <a
              href="https://www.linkedin.com/in/marco-maigua-66822584/"
              target="_blank"
            >
              <img src={linkedinLogo} />
            </a>
            <a href="https://github.com/nemesis1346" target="_blank">
              <img src={githubLogo} />
            </a>
            <a href="https://gitlab.com/nemesis1346" target="_blank">
              <img src={gitlabLogo} />
            </a>
            <a href="https://medium.com/@nemesis1346" target="_blank">
              <img src={mediumLogo} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPropsHomePage = state => {
  //In this case objects is gonna be applied to the props of the component
  return {
    professionalProfileContent:
      state.professionalPageReducer.professionalProfileContent,
    linkedinLogo: state.professionalPageReducer.linkedinLogo,
    githubLogo: state.professionalPageReducer.githubLogo,
    gitlabLogo: state.professionalPageReducer.gitlabLogo,
    mediumLogo: state.professionalPageReducer.mediumLogo,
    language: state.constantReducer.language
  };
};

export default connect(
  mapStateToPropsHomePage,
  {
    getProfessionalContent,
    getLinkedinLogo,
    getGithubLogo,
    getGitlabLogo,
    getMediumLogo
  }
)(HomePage);
