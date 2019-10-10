import axios from 'axios'
export const INFO_SHOP = 'GET_MAIN_INFO_SHOP'

export function getMainInfoShop(payload){
    return (dispatch) => {
        axios.post('http://localhost:1337/api/create-shop',{username: payload})
        .then(data => {
            if(data && 0 === data.error){
                d
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}