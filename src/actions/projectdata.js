import axios from 'axios';

export const PROJECTDATA_REQUEST = 'PROJECTDATA_REQUEST'
export const PROJECTDATA_SUCCESS = 'PROJECTDATA_SUCCESS'
export const PROJECTDATA_ERROR = 'PROJECTDATA_ERROR'


const ROOT_URL = 'https://trkmf.com/api/v1';

function requestProjectData() {
  return {
    type: PROJECTDATA_REQUEST,
    isFetching: true
  }
}

function receiveProjectData(data) {
  return {
    type: PROJECTDATA_SUCCESS,
    isFetching: false,
    projectdata: data
  }
}

function errorProjectData(data) {
  return {
    type: PROJECTDATA_ERROR,
    isFetching: false,
    message: data
  }
}

// Calls the projects endpoint
export function fetchProjectData(id,startdate,enddate) {
  const request = axios.get(`${ROOT_URL}/data/project/${id}/${startdate}/${enddate}`, { headers: { 'x-access-token' : localStorage.getItem('id_token')} });

  return dispatch => {
    dispatch(requestProjectData());

    return request.then(function(resp){
       dispatch(receiveProjectData(resp.data))
    }).catch(err => dispatch(errorProjectData("Error getting project data - catch")));
  }
}
