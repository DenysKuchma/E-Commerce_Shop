export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const GET_USER_TOKEN = 'GET_USER_TOKEN'
export const LOGOUT_USER = 'LOGOUT_USER'

const defaultState = {
    token: '',
    login: '',
    password: '',
}

export default function userReducer(state = defaultState, action){
    switch(action.type){
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login,
                password: action.payload.password,
            }
        case LOGOUT_USER:
            return defaultState;
        default:
            return state
    }
}

export const getTokenAC = ({login, password}) =>({
    type: GET_USER_TOKEN,
    payload: {
        login,
        password
    }
})

export const setUserTokenAC = (token, login, password) => ({
    type: SET_USER_TOKEN,
    payload: {
        token,
        login,
        password
    }
})

export const logoutUserAC = () => ({
    type: LOGOUT_USER,
});