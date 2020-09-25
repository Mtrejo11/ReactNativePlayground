
// reducer.js

import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/actions';
import { combineReducers } from "redux";

const initialState = {
    pending: false,
    products: [],
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:

            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: true,
                ...action.payload
            }
            
        case FETCH_PRODUCTS_ERROR:

            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:

            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;


export default combineReducers({
    products: productsReducer
});