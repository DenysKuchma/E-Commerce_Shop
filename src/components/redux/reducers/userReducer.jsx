export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const GET_TOKEN_ACTION ='GET_TOKEN_ACTION'
export const GET_TOKEN_LOGIN_ACTION ='GET_TOKEN_LOGIN_ACTION'
export const SET_USER_AUTHORIZED ='SET_USER_AUTHORIZED'
export const LOGOUT_USER = 'LOGOUT_USER'

const defaultState = {
    token: '',
    login: '',
    password: '',
    authorized: false
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
            return {
                ...state,
                token: action.payload.token
            }
        case SET_USER_AUTHORIZED:
            return {
                ...state,
                authorized: action.payload.authorized,
            }
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

export const logoutUserAC = () => ({
    type: LOGOUT_USER,
});