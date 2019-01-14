import React from "react";
import { connect } from "react-redux";
import {
  getProfessionalImage,
  getProfessionalContent,
  getLinkedinLogo,
  getGithubLogo,
  getGitlabLogo,
  getMediumLogo
} from "../../actions/professionalActions";

import "../styles/homePage.css";

class HomePage extends React.Component {
  componentWillMount() {
    this.props.getProfessionalImage();
    this.props.getProfessionalContent();
    this.props.getLinkedinLogo();
    this.props.getLinkedinLogo();
    this.props.getGithubLogo();
    this.props.getGitlabLogo();
    this.props.getMediumLogo();
  }
  render() {
    console.log(this.props);
    const {
      professionalProfilePhoto,
      professionalProfileContent,
      linkedinLogo,
      githubLogo,
      gitlabLogo,
      mediumLogo
    } = this.props;
    return (
      <div className="home-page-container">
        <div className="left-container holder">
          <img src={professionalProfilePhoto} />
        </div>
        <div className="right-container">
          <h1>Marco Maigua</h1>
          <p>{professionalProfileContent}</p>
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
            <a href="https://medium.com/@marco.maigua1346" target="_blank">
              <img src={mediumLogo} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPropsHomePage = state => {
  console.log(state);
  //In this case objects is gonna be applied to the props of the component
  return {
    professionalProfilePhoto:
      state.professionalPageReducer.professionalProfilePhoto,
    professionalProfileContent:
      state.professionalPageReducer.professionalProfileContent,
    linkedinLogo: state.professionalPageReducer.linkedinLogo,
    githubLogo: state.professionalPageReducer.githubLogo,
    gitlabLogo: state.professionalPageReducer.gitlabLogo,
    mediumLogo: state.professionalPageReducer.mediumLogo
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
)(HomePage);
