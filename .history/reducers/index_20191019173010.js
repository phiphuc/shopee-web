import {INFO_SHOP, GET_OTP, RESET_LOGIN} from '../actions/index';
export const  shopInitialState = {linkShop:'', data:{}, info:[], dataLogin: 4 }
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return {...state, data: action.payload}
        case GET_OTP:
                if(action.payload.errorCode === 0){
                    return { ...state, dataLogin: true }
                }else{
                    return { ...state, dataLogin: false }
                }
        default:
            return state
    }
}

export default shopReducer;