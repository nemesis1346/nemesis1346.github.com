import { GET_BLOGS_SUCCESS, ERROR_MIDDLEWARE } from '../constants/types';

const initState = {
    posts: [],
    error:''
}

const blogPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                posts: action.posts
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

export default blogPageReducer;