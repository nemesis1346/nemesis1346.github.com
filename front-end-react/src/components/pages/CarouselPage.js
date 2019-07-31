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

            <div >
                <AwesomeSlider >
                    <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofersionalImage1.jpg?alt=media&token=bf6b634c-00cd-43f3-9e7b-447607a3bcb7" />
                    <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage2.jpg?alt=media&token=b3f34f15-7d1e-41d1-a4ef-41eba0d62bcf" />
                    <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage3.jpg?alt=media&token=09ffbe8e-6602-4efb-93b1-a4476089536a" />
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
