import axios from 'axios'
// import {NotificationContainer, NotificationManager} from 'react-notifications';

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
            console.log(data);
            if(data && data.data |&& data.data.errorCode || data.data.errorCode === ''){
                NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');
                return;
            }
            // switch(data.data.errorCode){
            //     case 0: dispatch({type:GET_OTP,payload: data.data.data}); return
            //     case 1: NotificationManager.error('Lỗi', 'Sai số điện thoại hoặc mật khẩu'); return
            //     case 2: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); return
            //     case 3: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); return
            //     default: NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');
            // }
        
        })
        .catch(err => {
            console.log(err)
        })
    }
}