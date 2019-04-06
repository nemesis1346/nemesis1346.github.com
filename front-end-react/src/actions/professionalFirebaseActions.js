import FirebaseApi from "../api/FirebaseApi";
import {
  ERROR_MIDDLEWARE,
  GET_IMAGE_SUCCESS,
  GET_CONTENT_SUCCESS,
  GET_LINKEDIN_LOGO_SUCCESS,
  GET_MEDIUM_LOGO_SUCCESS,
  GET_GITHUB_LOGO_SUCCESS,
  GET_GITLAB_LOGO_SUCCESS
} from "../constants/types";

export const getProfessionalImage = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/professional/professionalPhoto1.jpg")
      .then(res => {
        dispatch(getProfessionalImageSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};

export const getProfessionalContent = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getDocument("/content","UJ9dOUKXi627jKWxPDPb")
      .then(doc => {
        console.log(doc.data());
        if(doc.exists){
          console.log(doc);
          dispatch(getProfessionalContentSuccess(doc.data()));
        }
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getLinkedinLogo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/logos/linkedin.png")
      .then(res => {
        dispatch(getLinkedinLogoSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getMediumLogo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/logos/medium.png")
      .then(res => {
        dispatch(getMediumLogoSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getGithubLogo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/logos/github.png")
      .then(res => {
        dispatch(getGithubLogoSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getGitlabLogo = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    FirebaseApi.getImage("/photos/logos/gitlab.jpg")
      .then(res => {
        dispatch(getGitlabLogoSuccess(res));
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getGitlabLogoSuccess = image => {
  return {
    type: GET_GITLAB_LOGO_SUCCESS,
    gitlabLogo: image
  };
};

const getGithubLogoSuccess = image => {
  return {
    type: GET_GITHUB_LOGO_SUCCESS,
    githubLogo: image
  };
};
const getLinkedinLogoSuccess = image => {
  return {
    type: GET_LINKEDIN_LOGO_SUCCESS,
    linkedinLogo: image
  };
};
const getMediumLogoSuccess = image => {
  return {
    type: GET_MEDIUM_LOGO_SUCCESS,
    mediumLogo: image
  };
};

const getProfessionalContentSuccess = contents => {
  return {
    type: GET_CONTENT_SUCCESS,
    professionalProfileContent: contents.spanish
  };
};

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
