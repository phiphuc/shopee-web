import {INFO_SHOP, GET_OTP, RESET_LOGIN} from '../actions/index';
export const  shopInitialState = {linkShop:'', data:{}, info:[], dataLogin: 2 }
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return {...state, data: action.payload}
        case GET_OTP:
                if(action.payload.errorCode === 0){
                    return { ...state, dataLogin: 0 }
                }else{
                    return { ...state, dataLogin: 1 }
                }
        default:
            return state
    }
}

export default shopReducer;