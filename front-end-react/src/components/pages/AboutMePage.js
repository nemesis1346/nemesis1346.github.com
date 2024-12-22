//Maybe this page is not necessary anymore since i have the Home page for showing my profile

import React from "react";
import { connect } from "react-redux";
import {
  getProfessionalImage,
  getProfessionalContent,
  getLinkedinLogo,
  getGithubLogo,
  getGitlabLogo,
  getMediumLogo
} from "../../actions/professionalFirebaseActions";
import * as CONSTANTS from '../../constants/types';
import "../styles/homePage.css";

class AboutMePage extends React.Component {

  componentWillMount() {
    this.props.getProfessionalImage();
    this.props.getProfessionalContent();
    this.props.getLinkedinLogo();
    this.props.getGithubLogo();
    this.props.getGitlabLogo();
    this.props.getMediumLogo();
  }
  render() {
    console.log('About Me Page');
    // console.log(this.props);
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
        <div className="left-container holder">
          <img src={professionalProfilePhoto} />
        </div>
        <div className="right-container">
          <h1>Marco Maigua</h1>
          <a className="waves-effect waves-light btn button-resume" href="https://storage.cloud.google.com/cms-personal.appspot.com/documents/cv_marco_maigua.pdf" target="_blank">
            <i>Personal Resume</i>
          </a>

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
            {/* Right not i am not using this */}
            {/* <a href="https://gitlab.com/nemesis1346" target="_blank">
              <img src={gitlabLogo} />
            </a> */}
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
    professionalProfilePhoto:
      state.professionalPageReducer.professionalProfilePhoto,
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
    getProfessionalImage,
    getProfessionalContent,
    getLinkedinLogo,
    getGithubLogo,
    getGitlabLogo,
    getMediumLogo
  }
)(AboutMePage);
