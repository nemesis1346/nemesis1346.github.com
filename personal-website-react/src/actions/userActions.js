import FirebaseApi from '../api/FirebaseApi';
import { ERROR_MIDDLEWARE } from '../constants/types';
import { GET_IMAGE_SUCCESS } from '../constants/types';

export const getProfessionalImage = () => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        FirebaseApi.getImage('/photos/professional/professionalPhoto1.jpg')
            .then((res) => {
                console.log(res);
                dispatch(getProfessionalImageSuccess(res));
            })
            .catch((err) => {
                console.log(err);
                dispatch(handleError(err.message))
            })
    }
}

const getProfessionalImageSuccess = (image) => {
    return {
        type: GET_IMAGE_SUCCESS,
        professionalProfilePhoto: image
    }
}

const handleError = (message) => {
    return {
        type: ERROR_MIDDLEWARE,
        message: message
    }
}