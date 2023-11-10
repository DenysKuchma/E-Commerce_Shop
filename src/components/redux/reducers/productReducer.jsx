export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'

const defaultState = {
    data: [],
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export const getProductsAC = (categoryId) => ({
    type: GET_PRODUCTS,
    payload: {
        categoryId,
    }
})

export const setProductsAC = ({data}) => ({
    type: SET_PRODUCTS,
    payload: {
        data
    }
})
