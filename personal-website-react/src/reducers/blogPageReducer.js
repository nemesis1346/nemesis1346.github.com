import { GET_BLOGS_SUCCESS } from '../constants/types';

const initState = {
    posts: []
}

const blogPageReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}

export default blogPageReducer;