import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const GET_OTP = 'GET_OTP'
export const LINK_GET_INFO = 'http://localhost:8089/api/shop-mains';
export const LINK_GET_OTP = 'http://localhost:8089/api/shop-subs/otp';
export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post(LINK_GET_INFO,{linkShop: payload})
        .then(data => {
            if(data && data.data && 0 === data.data.errorCode){
                dispatch({type:INFO_SHOP,payload: data.data.data})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function getOtpAction(payload){
    return (dispatch) => {
        axios.post(LINK_GET_OTP,payload)
        .then(data => {
            if(!data || ){
                NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');
                return;
            }
            if(){

            }
            if(data && data.data && 0 === data.data.error){
                dispatch({type:GET_OTP,payload: data.data.data});
                return;
            }
            if(data && data.data && 0 === data.data.error){
                dispatch({type:GET_OTP,payload: data.data.data});
                return;
            }

        })
        .catch(err => {
            console.log(err)
        })
    }
}