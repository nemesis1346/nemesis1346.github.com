import React from "react";
import { connect } from "react-redux";
import {
    getCarouselImages
} from "../../actions/professionalFirebaseActions";
import { SPANISH_LANGUAGE, ENGLISH_LANGUAGE } from '../../constants/types';
import "../styles/homePage.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class CarouselPage extends React.Component {
    componentWillMount() {
    }


    // render() {
    //     return (

    //         <div >
    //             <AwesomeSlider >
    //                 <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofersionalImage1.jpg?alt=media&token=bf6b634c-00cd-43f3-9e7b-447607a3bcb7" >HOLA A TODOS</div>
    //                 <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage2.jpg?alt=media&token=b3f34f15-7d1e-41d1-a4ef-41eba0d62bcf" />
    //                 <div data-src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage3.jpg?alt=media&token=09ffbe8e-6602-4efb-93b1-a4476089536a" />
    //             </AwesomeSlider>
    //         </div>
    //     );
    // }

    // render() {
    //     return (
    //         <Carousel>
    //             <div>
    //                 <img src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofersionalImage1.jpg?alt=media&token=bf6b634c-00cd-43f3-9e7b-447607a3bcb7" />
    //                 <p className="legend">Legend 1</p>
    //             </div>
    //             <div>
    //                 <img src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage2.jpg?alt=media&token=b3f34f15-7d1e-41d1-a4ef-41eba0d62bcf" />
    //                 <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //                 <img src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage3.jpg?alt=media&token=09ffbe8e-6602-4efb-93b1-a4476089536a" />
    //                 <p className="legend">Legend 3</p>
    //             </div>
    //         </Carousel>
    //     );
    // }

    render() {
        const images = [
            {
              original: "https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofersionalImage1.jpg?alt=media&token=bf6b634c-00cd-43f3-9e7b-447607a3bcb7",
              originalTitle:"TEST"
            },
            {
              original: "https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage2.jpg?alt=media&token=b3f34f15-7d1e-41d1-a4ef-41eba0d62bcf",

            },
            {
              original: "https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage3.jpg?alt=media&token=09ffbe8e-6602-4efb-93b1-a4476089536a",

            }
          ]
        return (
            <ImageGallery items={images}   showThumbnails={false}>
                hola a TODOS
            </ImageGallery>

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
