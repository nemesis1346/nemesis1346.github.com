
import {GET_IMAGE_SUCCESS} from '../constants/types';
const initState = {
    professionalProfilePhoto:null
}
const userReducer = (state=initState, action={}) => {
    switch (action.type) {
        case GET_IMAGE_SUCCESS:
            return {
                ...state,
                professionalProfilePhoto:action.professionalProfilePhoto
            }
        default:
            return state;
    }
}

export default userReducer;

