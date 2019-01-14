import {
  GET_IMAGE_SUCCESS,
  GET_CONTENT_SUCCESS,
  GET_GITHUB_LOGO_SUCCESS,
  GET_LINKEDIN_LOGO_SUCCESS,
  GET_GITLAB_LOGO_SUCCESS,
  GET_MEDIUM_LOGO_SUCCESS
} from "../constants/types";
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
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        professionalProfilePhoto: action.professionalProfilePhoto
      };
    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        professionalProfileContent: action.professionalProfileContent
      };
    case GET_LINKEDIN_LOGO_SUCCESS:
      return {
        ...state,
        linkedinLogo: action.linkedinLogo
      };
    case GET_MEDIUM_LOGO_SUCCESS:
      return {
        ...state,
        mediumLogo: action.mediumLogo
      };
    case GET_GITHUB_LOGO_SUCCESS:
      return {
        ...state,
        githubLogo: action.githubLogo
      };
    case GET_GITLAB_LOGO_SUCCESS:
      return {
        ...state,
        gitlabLogo: action.gitlabLogo
      };
    default:
      return state;
  }
};

export default professionalPageReducer;
