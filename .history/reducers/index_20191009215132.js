import {GET_MAIN_INFO_SHOP} from '../actions/index';
import axios from 'axios';
export const  shopInitialState = {linkShop:'', data:{}}
const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case GET_MAIN_INFO_SHOP:
                getMainInfoShop
            return state
        default:
            return state
    }
}

async function getMainInfoShop(payload){
     axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // handle lỗi
      console.log(error);
    })
    return;
}

export default shopReducer;