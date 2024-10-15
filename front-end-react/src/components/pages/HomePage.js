import React from "react";
import { connect } from "react-redux";
import {
  getProfessionalContent,
  getLinkedinLogo,
  getGithubLogo,
  getGitlabLogo,
  getMediumLogo,
  getProfessionalImage
} from "../../actions/professionalFirebaseActions";
import * as CONSTANTS from '../../constants/types';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Import Bootstrap components
import "../styles/homePage.css";


class HomePage extends React.Component {

  componentWillMount() {
    this.props.getProfessionalImage();
    this.props.getProfessionalContent();
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
    // console.log('rendered')
    // console.log(professionalProfileContent)

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

      <Container className="home-page-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="left-container order-md-1 order-1">
            <Image src={professionalProfilePhoto} roundedCircle fluid />
          </Col>

          <Col xs={12} md={6} className="right-container order-md-2 order-2">
            <h1>Marco Maigua</h1>
            <Button
              href="https://storage.cloud.google.com/cms-personal.appspot.com/documents/cv_marco_maigua.pdf"
              target="_blank"
              className="button-resume"
            >
              Personal Resume
            </Button>
            <p>{content}</p>
            <div className="social-media-container">
              <a href="https://www.linkedin.com/in/marco-maigua-66822584/" target="_blank">
                <Image src={linkedinLogo} fluid />
              </a>
              <a href="https://github.com/nemesis1346" target="_blank">
                <Image src={githubLogo} fluid />
              </a>
              <a href="https://medium.com/@nemesis1346" target="_blank">
                <Image src={mediumLogo} fluid />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
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
)(HomePage);
