import {
  PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECTS_ERROR
} from '../actions/projects'

export default function (state = {
    isFetching: false,
  }, action) {
  switch (action.type) {
    case PROJECTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.projects,
      })
    case PROJECTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}
