import {INFO_SHOP} from '../actions/index';
import axios from 'axios';
export const  shopInitialState = {linkShop:'', data:{}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return state
        default:
            return state
    }
}



export default shopReducer;