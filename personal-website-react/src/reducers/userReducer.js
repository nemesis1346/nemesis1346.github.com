import { GET_IMAGE_SUCCESS, GET_CONTENT_SUCCESS } from "../constants/types";
const initState = {
  professionalProfilePhoto: null
};
const userReducer = (state = initState, action = {}) => {
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
    default:
      return state;
  }
};

export default userReducer;
