
export const SET_USER_TOKEN_NAME = 'SET_USER_TOKEN_NAME'
export const LOGOUT_USER = 'LOGOUT_USER'

const defaultState = {
    token: '',
    login: '',
}

export default function userReducer(state = defaultState, action){
    switch(action.type){
        case SET_USER_TOKEN_NAME:
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login,
            }
        case LOGOUT_USER:
            return defaultState;
        default:
            return state
    }
}

export const setUserTokenAndLogin = (token, login) => ({
    type: SET_USER_TOKEN_NAME,
    payload: {
        token,
        login,
    }
})

export const logoutUser = () => ({
    type: LOGOUT_USER,
});