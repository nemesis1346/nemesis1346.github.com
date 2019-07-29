import FirebaseApi from "../api/FirebaseApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getBlogs = () => {
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

export const getBlogsByDatetime = () => {
  return (dispatch) => {
    FirebaseApi.getDocumentsOrderedBy('/posts', 'timestamp')
      .then(res => {
        let postsList = [];
        res.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          postsList.push(doc.data());
        });
        dispatch(getBlogsSuccess(postsList));
      })
      .catch(err => {
        console.log('ERROR GET BLOGS BY DATETIME');
        console.log(err);
        dispatch(handleError(err.message));
      });
  }
}


const getBlogsSuccess = posts => {
  return {
    type: CONSTANTS.GET_BLOGS_SUCCESS,
    posts: posts
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    error: message
  };
};
