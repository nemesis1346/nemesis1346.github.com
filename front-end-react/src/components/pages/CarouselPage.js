import React from "react";
import { connect } from "react-redux";
import {
    getCarouselImages
} from "../../actions/professionalFirebaseActions";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';
import "../styles/homePage.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class CarouselPage extends React.Component {
    componentWillMount() {
    }
    render() {
        return (

            <div className="home-page-container">
                hola
                <AwesomeSlider>
                    <div data-src="/path/to/image-0.png" />
                    <div data-src="/path/to/image-1.png" />
                    <div data-src="/path/to/image-2.jpg" />
                </AwesomeSlider>
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
//   mapStateToPropsHomePage,
//   {
//     getProfessionalImage,
//   }
// )(HomePage);


export default CarouselPage;
