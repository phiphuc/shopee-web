import axios from 'axios'
export const GET_MAIN_INFO_SHOP = 'GET_MAIN_INFO_SHOP'

export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post('http:localhost:1337/api/get-id-by-username',{username: payload})
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err)
        })
    }
}