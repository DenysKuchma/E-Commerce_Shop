export const GET_CATEGORYS = 'GET_CATEGORY'
export const SET_CATEGORYS = 'SET_CATEGORY'

const defaultState = {
    data: [],
}


export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CATEGORYS:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export const getCategotysAC = (limit = 10, skip = 0) => ({
    type: GET_CATEGORYS,
    payload: {
        skip,
        limit
    }
})

export const setCategotysAC = ({ data }) => ({
    type: SET_CATEGORYS,
    payload: {
        data
    }
})