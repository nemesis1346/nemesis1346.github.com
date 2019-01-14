import FirebaseApi from "../api/FirebaseApi";
import {
  ERROR_MIDDLEWARE,
  GET_BLOGS_SUCCESS,
} from "../constants/types";

export const getBlogs = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/professional/professionalPhoto1.jpg")
      .then(res => {
        dispatch(getBlogsSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};


const getBlogsSuccess = posts => {
    return {
      type: GET_BLOGS_SUCCESS,
      professionalProfilePhoto: posts
    };
  };
  
  const handleError = message => {
    return {
      type: ERROR_MIDDLEWARE,
      message: message
    };
  };
  