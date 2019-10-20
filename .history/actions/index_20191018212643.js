import axios from 'axios'
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const GET_OTP = 'GET_OTP'
export const LINK_GET_INFO = 'http://localhost:8089/api/account-info';
export const LINK_GET_OTP = URL+'/api/get-otp';
export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post(LINK_GET_INFO,{username: payload})
        .then(data => {
            if(data && data.data && 0 === data.data.error){
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
            if(data && data.data && 0 === data.data.error){
                dispatch({type:GET_OTP,payload: data.data.data})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}