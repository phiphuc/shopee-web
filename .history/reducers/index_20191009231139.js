export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
import {GET_MAIN_INFO_SHOP} from '../actions/index';
import axios from 'axios';
export const  shopInitialState = {linkShop:'', data:{}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case GET_MAIN_INFO_SHOP:
            return state
        default:
            return state
    }
}



export default shopReducer;