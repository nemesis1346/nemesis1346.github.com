import * as CONSTANTS from "../constants/types";

const initState = {
  professionalProfilePhoto: null,
  professionalProfileContent: null,
  linkedinLogo: null,
  mediumLogo: null,
  githubLogo: null,
  gitlabLogo: null
};
const professionalPageReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CONSTANTS.GET_IMAGE_SUCCESS:
      return {
        ...state,
        professionalProfilePhoto: action.professionalProfilePhoto
      };
    case CONSTANTS.GET_CONTENT_SUCCESS:
      return {
        ...state,
        professionalProfileContent: action.professionalProfileContent
      };
    case CONSTANTS.GET_LINKEDIN_LOGO_SUCCESS:
      return {
        ...state,
        linkedinLogo: action.linkedinLogo
      };
    case CONSTANTS.GET_MEDIUM_LOGO_SUCCESS:
      return {
        ...state,
        mediumLogo: action.mediumLogo
      };
    case CONSTANTS.GET_GITHUB_LOGO_SUCCESS:
      return {
        ...state,
        githubLogo: action.githubLogo
      };
    case CONSTANTS.GET_GITLAB_LOGO_SUCCESS:
      return {
        ...state,
        gitlabLogo: action.gitlabLogo
      };
    default:
      return state;
  }
};

export default professionalPageReducer;
