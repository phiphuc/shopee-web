import {INFO_SHOP, GET_OTP, RESET_LOGIN} from '../actions/index';
export const  shopInitialState = {linkShop:'', data:{}, info:[], dataLogin: {}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return {...state, data: action.payload}
        case GET_OTP:
            return {...state, dataLogin: action.payload}
        case RESET_LOGIN: {
            if(action.payload.errorCode === 0){
                return{... state, da}
            }
        }
        
        default:
            return state
    }
}

export default shopReducer;