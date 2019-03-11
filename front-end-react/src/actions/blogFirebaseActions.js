import FirebaseApi from "../api/FirebaseApi";
import {
  ERROR_MIDDLEWARE,
  GET_BLOGS_SUCCESS,
} from "../constants/types";

export const getBlogs = () => {
    console.log('gets here');
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getDocuments("/posts")
      .then(res => {
          let postsList = [];
          res.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`);
            postsList.push(doc.data());
          });
        dispatch(getBlogsSuccess(postsList));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};


const getBlogsSuccess = posts => {
    return {
      type: GET_BLOGS_SUCCESS,
      posts: posts
    };
  };
  
  const handleError = message => {
    return {
      type: ERROR_MIDDLEWARE,
      error: message
    };
  };
  