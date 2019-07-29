import * as CONSTANTS from '../constants/types';
export const setLanguage = (language) => {
    return {
        type: CONSTANTS.SET_LANGUAGE,
        language: language
    };
}