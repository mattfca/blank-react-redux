import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import projects from './projects';
import projectdata from './projectdata';

const rootReducer = combineReducers({
  form: formReducer,
  auth: auth,
  projects: projects,
  projectdata: projectdata,
});

export default rootReducer;
