import { jwtDecode } from "jwt-decode";

export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const GET_TOKEN_ACTION ='GET_TOKEN_ACTION'
export const GET_TOKEN_LOGIN_ACTION ='GET_TOKEN_LOGIN_ACTION'
export const SET_USER_AUTHORIZED ='SET_USER_AUTHORIZED'
export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SET_USER_INFO = 'SET_USER_INFO';
export const LOGOUT_USER = 'LOGOUT_USER'


const defaultState = {
    token: '',
    login: '',
    password: '',
    authorized: false,
    userData: {},
    userInfo: ''
}

export default function userReducer(state = defaultState, action){
    switch(action.type){
        case GET_TOKEN_ACTION:
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login,
                password: action.payload.password,
            }
        case GET_TOKEN_LOGIN_ACTION:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password,
            }
        case SET_USER_TOKEN:
            const decodedToken = jwtDecode(action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                userData: decodedToken
            }
        case SET_USER_AUTHORIZED:
            return {
                ...state,
                authorized: action.payload.authorized,
            }
        case SAVE_USER_DATA:
            return {
                ...state,
                userData: action.payload, 
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case LOGOUT_USER:
            return defaultState;
        default:
            return state
    }
}

export const getTokenAC = ({login, password}) =>({
    type: GET_TOKEN_ACTION,
    payload: {
        login,
        password,
    }
})

export const getTokenLoginAC = ({ login, password}) => ({
    type: GET_TOKEN_LOGIN_ACTION,
    payload: {
        login,
        password,
    }
    
})

export const setUserTokenAC = (token) => ({
    type: SET_USER_TOKEN,
    payload: {
        token,
    }
})

export const setUserAuthorized = () => ({
    type: SET_USER_AUTHORIZED,
    payload: {
        authorized: true,
    }
})
export const saveUserData = (userData) => ({
    type: SAVE_USER_DATA,
    payload: userData,
});

export const getUserInfoAC = (userId) => ({
    type: GET_USER_INFO_ACTION,
    payload: userId,
});
export const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo,
});

export const logoutUserAC = () => ({
    type: LOGOUT_USER,
});