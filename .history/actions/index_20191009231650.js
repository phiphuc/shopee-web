import axios from 'axios'
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const LINK_GET_INFO = 'http://localhost:1337/api/create-shop';
export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post(,{username: payload})
        .then(data => {
            if(data && 0 === data.error ){
                dispatch({type:INFO_SHOP,payload: data.data})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}