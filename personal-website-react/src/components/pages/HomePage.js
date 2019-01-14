import React from "react";
import { connect } from "react-redux";
import {
  getProfessionalImage,
  getProfessionalContent
} from "../../actions/userActions";

import "../styles/homePage.css";

class HomePage extends React.Component {
  componentWillMount() {
    this.props.getProfessionalImage();
    this.props.getProfessionalContent();
  }
  render() {
    console.log(this.props);
    const { professionalProfilePhoto, professionalProfileContent } = this.props;
    return (
      <div className="home-page-container">
        <div className="left-container holder">
          <img src={professionalProfilePhoto} />
        </div>
        <div className="right-container">
          <h1>Marco Maigua</h1>
          <p>{professionalProfileContent}</p>
        </div>
      </div>
    );
  }
}

const mapStateToPropsHomePage = state => {
  console.log(state);
  //In this case objects is gonna be applied to the props of the component
  return {
    professionalProfilePhoto: state.userReducer.professionalProfilePhoto,
    professionalProfileContent: state.userReducer.professionalProfileContent
  };
};

export default connect(
  mapStateToPropsHomePage,
  { getProfessionalImage, getProfessionalContent }
)(HomePage);
