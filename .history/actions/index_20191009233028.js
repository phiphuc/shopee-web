import axios from 'axios'
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'
export const LINK_GET_INFO = 'http://localhost:1337/api/create-shop';
export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post(LINK_GET_INFO,{username: payload})
        .then(data => {
            if(data && data.data & data.data.erro){
                dispatch({type:INFO_SHOP,payload: data.data})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}