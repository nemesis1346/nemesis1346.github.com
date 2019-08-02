import React from "react";
import { connect } from "react-redux";
import {
  getCarouselImages
} from "../../actions/professionalFirebaseActions";
import "../styles/homePage.css";

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

class CarouselPage extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofersionalImage1.jpg?alt=media&token=bf6b634c-00cd-43f3-9e7b-447607a3bcb7"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage2.jpg?alt=media&token=b3f34f15-7d1e-41d1-a4ef-41eba0d62bcf"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/photos%2Fprofessional%2FprofessionalImage3.jpg?alt=media&token=09ffbe8e-6602-4efb-93b1-a4476089536a"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>

    );
  }
}

export default CarouselPage;
