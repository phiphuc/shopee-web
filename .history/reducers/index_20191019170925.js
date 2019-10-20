import {INFO_SHOP, GET_OTP, RESET_LOGIN} from '../actions/index';
export const  shopInitialState = {linkShop:'', data:{}, info:[], dataLogin: false
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case INFO_SHOP:
            return {...state, data: action.payload}
        case GET_OTP:
                if(action.payload.errorCode === 0){
                    return{... state, dataLogin: true,  info: state.info.push(action.payload.data)}
                }else{
                    return{... state, dataLogin: {}}
                }
        case RESET_LOGIN: {
            
        }
        
        default:
            return state
    }
}

export default shopReducer;