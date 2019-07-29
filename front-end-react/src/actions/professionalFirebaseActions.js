import FirebaseApi from "../api/FirebaseApi";
import * as CONSTANTS from "../constants/types";
import * as ERRORS from '../constants/errors';

export const getProfessionalImage = () => {
  return (dispatch) => {
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
  return (dispatch) => {
    FirebaseApi.getDocument("/content","UJ9dOUKXi627jKWxPDPb")
      .then(doc => {
        if(doc.exists){
          console.log('RESPONSE');
          console.log(doc.data());
          dispatch(getProfessionalContentSuccess(doc.data()));
        }
      })
      .catch(err => {
        dispatch(handleError(err.message));
      });
  };
};
export const getLinkedinLogo = () => {
  return (dispatch) => {
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
  return (dispatch) => {
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
  return (dispatch) => {
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
  return (dispatch) => {
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
    type: CONSTANTS.GET_GITLAB_LOGO_SUCCESS,
    gitlabLogo: image
  };
};

const getGithubLogoSuccess = image => {
  return {
    type: CONSTANTS.GET_GITHUB_LOGO_SUCCESS,
    githubLogo: image
  };
};
const getLinkedinLogoSuccess = image => {
  return {
    type: CONSTANTS.GET_LINKEDIN_LOGO_SUCCESS,
    linkedinLogo: image
  };
};
const getMediumLogoSuccess = image => {
  return {
    type: CONSTANTS.GET_MEDIUM_LOGO_SUCCESS,
    mediumLogo: image
  };
};

const getProfessionalContentSuccess = contents => {
  return {
    type: CONSTANTS.GET_CONTENT_SUCCESS,
    professionalProfileContent: contents
  };
};

const getProfessionalImageSuccess = image => {
  return {
    type: CONSTANTS.GET_IMAGE_SUCCESS,
    professionalProfilePhoto: image
  };
};

const handleError = message => {
  return {
    type: ERRORS.ERROR_MIDDLEWARE,
    message: message
  };
};
