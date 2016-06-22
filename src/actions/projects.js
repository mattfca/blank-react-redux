import axios from 'axios';

export const PROJECTS_REQUEST = 'PROJECTS_REQUEST'
export const PROJECTS_SUCCESS = 'PROJECTS_SUCCESS'
export const PROJECTS_ERROR = 'PROJECTS_ERROR'

const ROOT_URL = 'https://trkmf.com/api/v1';

function requestProjects() {
  return {
    type: PROJECTS_REQUEST,
    isFetching: true
  }
}

function receiveProjects(data) {
  return {
    type: PROJECTS_SUCCESS,
    isFetching: false,
    projects: data
  }
}

function errorProjects(data) {
  return {
    type: PROJECTS_ERROR,
    isFetching: false,
    message: data
  }
}

// Calls the projects endpoint
export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/projects`, { headers: { 'x-access-token' : localStorage.getItem('id_token')} });

  return dispatch => {
    dispatch(requestProjects());

    return request.then(function(resp){
       dispatch(receiveProjects(resp.data))
    }).catch(err => {
      if(err.status == '403'){
        localStorage.removeItem('id_token');
      }
      dispatch(errorProjects("Error getting projects - catch"))
    });
  }
}