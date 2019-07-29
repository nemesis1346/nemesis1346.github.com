import FirebaseApi from "../api/FirebaseApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getProjects = () => {
  console.log('gets here');
  return (dispatch) => {
    FirebaseApi.getDocuments("/projects")
      .then(res => {
        let projectsList = [];
        res.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          projectsList.push(doc.data());
        });
        dispatch(getProjectsSuccess(projectsList));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};

export const getProjectsByDatetime = () => {
  return (dispatch) => {
    FirebaseApi.getDocumentsOrderedBy('/projects', 'timestamp')
      .then(res => {
        let projectsList = [];
        res.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          projectsList.push(doc.data());
        });
        dispatch(getProjectsSuccess(projectsList));
      })
      .catch(err => {
        console.log('ERROR GET PROJECTS BY DATETIME');
        console.log(err);
        dispatch(handleError(err.message));
      });
  }
}


const getProjectsSuccess = projects => {
  return {
    type: CONSTANTS.GET_PROJECTS_SUCCESS,
    projects: projects
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    error: message
  };
};
