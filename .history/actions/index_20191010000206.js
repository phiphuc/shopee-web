import axios from 'axios'
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const LINK_GET_INFO = 'http://localhost:1337/api/account-info';
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