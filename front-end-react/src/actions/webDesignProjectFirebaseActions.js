import FirebaseApi from "../api/FirebaseApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getWebDesignProjects = () => {
  return (dispatch) => {
    FirebaseApi.getDocuments("/webDesignProjects")
      .then(res => {
        let projectsList = [];
        res.forEach(doc => {
          projectsList.push(doc);
        });
        dispatch(getWebDesignProjectsSuccess(projectsList));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};

export const getWebDesignProjectsByDatetime = () => {
  return (dispatch) => {
    FirebaseApi.getDocumentsOrderedBy('/projects', 'timestamp')
      .then(res => {
        let projectsList = [];
        res.forEach(doc => {
          // console.log(doc)
          projectsList.push(doc);
        });
        dispatch(getWebDesignProjectsSuccess(projectsList));
      })
      .catch(err => {
        console.log('ERROR GET PROJECTS BY DATETIME');
        console.log(err);
        dispatch(handleError(err.message));
      });
  }
}


const getWebDesignProjectsSuccess = webDesignProjects => {
  return {
    type: CONSTANTS.GET_WEB_DESIGN_PROJECTS_SUCCESS,
    webDesignProjects: webDesignProjects
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    error: message
  };
};
