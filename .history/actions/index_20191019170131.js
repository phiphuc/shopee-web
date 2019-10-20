import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const GET_OTP = 'GET_OTP'
export const RESET_LOGIN = 'RESET_LOGIN'
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
            console.log(data);
            switch(data.data.errorCode){
                case 0:  NotificationManager.error('Thành công', 'Sai số điện thoại hoặc mật khẩu');
                case 1: NotificationManager.error('Lỗi', 'Sai số điện thoại hoặc mật khẩu'); 
                case 2: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); 
                case 3: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); 
                default: NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');
            }
            return dispatch({type:GET_OTP,payload: data.data}); 
        
        })
        .catch(err => {
            console.log(err)
        })
    }
}