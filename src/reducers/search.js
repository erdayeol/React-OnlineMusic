import * as actionTypes from '../constants/index';
const hotList = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SAVE_SEARCH_HOT:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
const resultList = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SAVE_SEARCH_RESULT:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};
export {hotList,resultList};