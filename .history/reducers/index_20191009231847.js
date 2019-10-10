import {INFO_SHOP} from '../actions/index';
export const  shopInitialState = {linkShop:'', data:{}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return {...state, data}
        default:
            return state
    }
}



export default shopReducer;