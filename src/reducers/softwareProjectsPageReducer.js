import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';
const initState = {
    projects: [],
    error: null,
    loading: false
}

const softwareProjectsPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_PROJECTS_BY_DATETIME_REQUEST:
            return { 
                ...state, 
                loading: true, 
                error: null 
            };
        case CONSTANTS.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects,
                loading: false
            }
        case ERRORS.ERROR_MIDDLEWARE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}

export default softwareProjectsPageReducer;