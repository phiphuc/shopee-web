import {GET_MAIN_INFO_SHOP} from '../actions/index';
import axios from 'axios'
export const  shopInitialState = {linkShop:'', data:{}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case GET_MAIN_INFO_SHOP:
            
            return state
        default:
            return state
    }
}

function getMainInfoShop(payload){

    return;
}

export default shopReducer;