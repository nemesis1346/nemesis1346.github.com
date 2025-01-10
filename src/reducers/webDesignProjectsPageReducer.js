import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';
const initState = {
    webDesignProjects: [],
    error: null,
    loading:false
}

const webDesignProjectsPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_WEB_DESIGN_PROJECTS_BY_DATETIME_REQUEST:
        return { 
            ...state, 
            loading: true, 
            error: null 
        };
        case CONSTANTS.GET_WEB_DESIGN_PROJECTS_SUCCESS:
        return {
            ...state,
            webDesignProjects: action.webDesignProjects,
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

export default webDesignProjectsPageReducer;