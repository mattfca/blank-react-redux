import {
    TOKEN_SUCCESS,
    TOKEN_FAILURE
} from '../actions/token'

export default function (state = {
    token: null
}, action){
    switch(action.type){
        case TOKEN_SUCCESS:
            return Object.assign({}, state, {
                token: action.token
            })
        default:
            return state;
    }
}