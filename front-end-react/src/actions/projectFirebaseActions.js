import FirebaseApi from "../api/FirebaseApi";
import {
  ERROR_MIDDLEWARE,
  GET_PROJECTS_SUCCESS,
} from "../constants/types";

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


const getProjectsSuccess = projects => {
    return {
      type: GET_PROJECTS_SUCCESS,
      projects: projects
    };
  };
  
  const handleError = message => {
    return {
      type: ERROR_MIDDLEWARE,
      error: message
    };
  };
  