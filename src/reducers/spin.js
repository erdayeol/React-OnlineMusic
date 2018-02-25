import * as actionTypes from '../constants/index';
const spin = (state = false, action) => {
    switch (action.type) {
        case actionTypes.SPIN_HIDE:
            return false;
        case actionTypes.SPIN_SHOW:
            return true;
        default:
            return state;
    }
};
export {spin};