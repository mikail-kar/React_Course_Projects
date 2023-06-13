import * as types from '../actions/ActionTypes';
import initialState from './initialState';

export default function categoriesReducer(state = initialState.categories, action) {
    switch (action.type) {
        case types.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}