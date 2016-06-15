import axios from 'axios';

export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_FAILURE = 'TOKEN_FAILURE';
export const TOKEN_CHECK = 'TOKEN_CHECK';

function tokenFailure(){
    return {
        type: TOKEN_FAILURE,
        token: null
    }
}

function tokenSuccess(token){
    return {
        type: TOKEN_SUCCESS,
        token: token
    }
}

function tokenCheck(token){
    return {
        type: TOKEN_CHECK,
        token: token
    }
}

export function failedToken(){
    return dispatch(tokenFailure);
}

export function successToken(token){
    return dispatch(tokenSuccess);
}

export function checkToken(){
    if(localStorage.getItem('id_token')){
        // We should check if token is still valid here
        // if token is invalid dispatch null / delete localstorage
        // and redirect to login
        return dispatch(tokenCheck(localStorage.getItem('id_token')));
    }else{
        return dispatch(tokenCheck(null));
    }
}