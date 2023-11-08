export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'

const defaultState = {
    data: [], 
    categoryId: null,
};

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data,
                categoryId: action.payload.categoryId,
            };
        default:
            return state;
    }
}

export const getProductsAC = (categoryId, limit, skip) => ({
    type: GET_PRODUCTS,
    payload: { categoryId, limit, skip },
});

export const setProductsAC = (data, categoryId) => ({
    type: SET_PRODUCTS,
    payload: { data, categoryId },
});

