import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';
const initState = {
    webDesignProjects: [],
    error: ''
}

const webDesignProjectsPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_WEB_DESIGN_PROJECTS_SUCCESS:
            return {
                ...state,
                webDesignProjects: action.webDesignProjects
            }
        case ERRORS.ERROR_MIDDLEWARE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default webDesignProjectsPageReducer;