import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const GET_OTP = 'GET_OTP'
export const GET_LOGIN = 'GET_LOGIN'
export const RESET_LOGIN = 'RESET_LOGIN';
export const GET_SUB_SHOP = 'GET_SUB_SHOP';

export const LINK_GET_INFO = 'http://localhost:8089/api/shop-mains';
export const LINK_GET_SUB_SHOP = 'http://localhost:8089/api/shop-subs';
export const LINK_GET_OTP = 'http://localhost:8089/api/shop-subs/otp';
export const LINK_GET_LOGIN = 'http://localhost:8089/api/shop-subs/login';

export function getMainInfoShop(payload){
    return async (dispatch) => {
        // axios.post(LINK_GET_INFO,{linkShop: payload})
        // .then( async (data) => {
        //     if(data && data.data && 0 === data.data.errorCode){
        //         console.log(data)
        //         const shopSub = await getSubShop(data.data.data.id)
        //         const res = {shopMain: data.data,  shopSub: shopSub}
        //         dispatch({type:INFO_SHOP,payload: res})
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        const resMainData = await getMainShop(payload);
        const resSubData= await getSubShop(resMainData.id);
        dispatch({type:INFO_SHOP,payload: {shopMain:resMainData, shopSub: resSubData}})


    }
}

function getMainShop(payload){
    return new Promise((res,rej) => {
        axios.post(LINK_GET_INFO,{linkShop: payload})
        .then( async (data) => {
            if(data && data.data && 0 === data.data.errorCode){
                return res(data.data.data)
            }else{
                console.log(data.data);
            }
        })
        .catch(err => {
            console.log(err)
        })
    })
}

function getSubShop(payload){
    return new Promise((res,rej) => {
        axios.get(LINK_GET_SUB_SHOP+"/"+payload)
        .then(data => {
            if(data && data.data){
                return res(data.data)
            }else{
                console.log(data.data);
            }
        })
        .catch(err => {
            console.log(err)
            return rej(err)
        })
    })
}

export function getOtpAction(payload){
    return (dispatch) => {
        axios.post(LINK_GET_OTP,payload)
        .then(data => {
            console.log(data);
            switch(data.data.errorCode){
                case 0: NotificationManager.error('Thành công', 'Thêm tài khoản phụ thành công');
                 return dispatch({type:GET_OTP,payload: data.data});  
                case 1: NotificationManager.error('Lỗi', 'Sai số điện thoại hoặc mật khẩu'); break
                case 2: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); break
                case 3: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); break
                case 12: NotificationManager.error('Lỗi', 'Tài khoản này đã được đăng kí trên hệ thống'); break
                default: NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');break
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function getLoginAction(payload){
    return (dispatch) => {
        axios.post(LINK_GET_LOGIN,payload)
        .then(data => {
            console.log(data);
            switch(data.data.errorCode){
                case 0: NotificationManager.error('Thành công', 'Thêm tài khoản phụ thành công');
                return dispatch({type:GET_LOGIN,payload: data.data}); 
                case 1: NotificationManager.error('Lỗi', 'Sai số điện thoại hoặc mật khẩu'); break
                case 2: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); break
                case 3: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); break
                default: NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');break
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}