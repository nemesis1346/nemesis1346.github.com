import MediumApi from "../api/MediumApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getBlogs = () => {
  return (dispatch, getState) => {
    MediumApi.getMediumBlogPosts()
      .then(res => {
        let postsList = [];
        res.items.forEach(doc => {
          postsList.push(doc);
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
