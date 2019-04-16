import {
    SET_LANGUAGE
} from '../constants/types';
export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        language: language
    };
}