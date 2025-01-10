import * as CONSTANTS from '../constants/types';
import * as ERRORS from '../constants/errors';

const initState = {
    posts: [],
    error:null, 
    loading:false
}

const blogPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case CONSTANTS.GET_BLOGS_BY_DATETIME_REQUEST:
        return { 
            ...state, 
            loading: true, 
            error: null 
        };
        case CONSTANTS.GET_BLOGS_SUCCESS:
        return {
            ...state,
            posts: action.posts,
            loading:false
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

export default blogPageReducer;