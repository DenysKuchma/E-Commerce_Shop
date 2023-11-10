export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'

const defaultState = {
    data: '',
}


export default function allProductReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export const getAllProductsAC = (limit = 10, skip = 0) => ({
    type: GET_ALL_PRODUCTS,
    payload: {
        skip,
        limit
    }
})

export const setAllProductsAC = ({ data }) => ({
    type: SET_ALL_PRODUCTS,
    payload: {
        data
    }
})


