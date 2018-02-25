import * as actionTypes from '../constants/index';
const saveRankList = (data) => {
    return {
        type: actionTypes.SAVE_RANKLIST,
        data
    }
};
export {saveRankList};