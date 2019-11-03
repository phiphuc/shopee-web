import { INFO_SHOP, GET_OTP, GET_LOGIN, RESET_LOGIN, GET_SUB_SHOP } from '../actions/index';
export const shopInitialState = { linkShop: '', data: {}, info: [], dataLogin: {} }
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            const info = action.payload.shopSub
            return { ...state, data: action.payload.shopMain, info: info  }
        case GET_OTP:
            return { ...state, dataLogin: action.payload }
        case GET_LOGIN:
            let temp = {...state};
            temp.info.push(action.payload)
            return { ...state, info: temp.info}
        case GET_SUB_SHOP:
            return { ...state, info: action.payload}
        default:
            return state
    }
}


export default shopReducer;