import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';

const initState = {
    posts: [],
    error:''
}

const blogPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_BLOGS_SUCCESS:
            return {
                ...state,
                posts: action.posts
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

export default blogPageReducer;