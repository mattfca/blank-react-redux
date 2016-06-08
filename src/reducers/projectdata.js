import {
  PROJECTDATA_REQUEST, PROJECTDATA_SUCCESS, PROJECTDATA_ERROR
} from '../actions/projectdata'

export default function (state = {
    isFetching: false,
  }, action) {
  switch (action.type) {
    case PROJECTDATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case PROJECTDATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.projectdata,
      })
    case PROJECTDATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}
