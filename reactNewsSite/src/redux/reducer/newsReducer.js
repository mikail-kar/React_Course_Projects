import * as actionTypes from "../actions/ActionTypes";
import initialState from "./initialState";

export default function newsReducer(state=initialState.news,action){
    switch (action.type) {
        case actionTypes.GET_NEWS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}