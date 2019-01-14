import { combineReducers } from 'redux';
import userReducer from './userReducer';
import professionalPageReducer from './professionalPageReducer';

//This is for comining all different reducers
export default combineReducers({
    userReducer,
    professionalPageReducer
});