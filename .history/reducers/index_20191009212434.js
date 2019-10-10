import {GET_MAIN_INFO_SHOP} from '../actions/index';
export const  shopInitialState = {linkShop:''}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case GET_MAIN_INFO_SHOP:
            return state
        default:
            return state
    }
}

export default shopReducer;