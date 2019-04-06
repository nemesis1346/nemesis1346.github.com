import { GET_PROJECTS_SUCCESS, ERROR_MIDDLEWARE } from '../constants/types';

const initState = {
    projects: [],
    error:''
}

const projectsPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.projects
            }
        case ERROR_MIDDLEWARE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default projectsPageReducer;