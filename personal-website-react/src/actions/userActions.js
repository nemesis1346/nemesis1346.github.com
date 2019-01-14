import FirebaseApi from "../api/FirebaseApi";
import { ERROR_MIDDLEWARE,GET_IMAGE_SUCCESS,GET_CONTENT_SUCCESS } from "../constants/types";

export const getProfessionalImage = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/professional/professionalPhoto1.jpg")
      .then(res => {
        console.log(res);
        dispatch(getProfessionalImageSuccess(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(handleError(err.message));
      });
  };
};

export const getProfessionalContent = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getDocument("/content")
      .then(res => {
        res.forEach((doc) => {
            //TODO: This must bechanged with several photos
            console.log(`${doc.id} => ${doc.data()}`);
            dispatch(getProfessionalContentSuccess(doc.data()));

        });
      })
      .catch(err => {
        console.log(err);
        dispatch(handleError(err.message));
      });
  };
};
const getProfessionalContentSuccess=contents =>{
    console.log('USER ACTIONS');
    console.log(contents);
    //TODO: change when there is going to be more than one language
    return {
        type: GET_CONTENT_SUCCESS,
        professionalProfileContent: contents.spanish
      };
}

const getProfessionalImageSuccess = image => {
  return {
    type: GET_IMAGE_SUCCESS,
    professionalProfilePhoto: image
  };
};

const handleError = message => {
  return {
    type: ERROR_MIDDLEWARE,
    message: message
  };
};
