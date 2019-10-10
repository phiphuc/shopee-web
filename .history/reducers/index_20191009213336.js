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

function getMainInfoShop(payload){
    axios.get('/user?ID=12345')
    .then(function (response) {
      // handle việc lấy dữ liệu thành công
      console.log(response);
    })
    .catch(function (error) {
      // handle lỗi
      console.log(error);
    })
    return;
}

export default shopReducer;