import { combineReducers } from 'redux';
import userReducer from './userReducer';
import professionalPageReducer from './professionalPageReducer';
import blogPageReducer from './blogPageReducer';
import softwareProjectsPageReducer from './softwareProjectsPageReducer';
import constantReducer from './constantReducers';
//This is for comining all different reducers
export default combineReducers({
    userReducer,
    professionalPageReducer,
    blogPageReducer,
    softwareProjectsPageReducer,
    constantReducer
});