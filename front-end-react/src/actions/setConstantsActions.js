import{
    SET_LANGUAGE
} from '../constants/types';
export const setLanguage =(language)=>{
    dispatch(
         {
            type: SET_LANGUAGE,
            language: language
          }
    );
}