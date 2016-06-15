import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import projects from './projects';
import projectdata from './projectdata';
import token from './token';

const rootReducer = combineReducers({
  form: formReducer,
  auth: auth,
  projects: projects,
  projectdata: projectdata,
  token: token,
});

export default rootReducer;

