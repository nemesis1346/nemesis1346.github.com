import React from "react";
import { connect } from "react-redux";
import {
  getCarouselImages
} from "../../actions/professionalFirebaseActions";
// import "../styles/homePage.css";

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
                    src="https://storage.cloud.google.com/cms-personal.appspot.com/photos/professional/professionalImage1.jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://storage.cloud.google.com/cms-personal.appspot.com/photos/professional/professionalImage2.jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://storage.cloud.google.com/cms-personal.appspot.com/photos/professional/professionalImage3.jpg"
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
