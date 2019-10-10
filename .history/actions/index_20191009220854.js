export const GET_MAIN_INFO_SHOP = 'GET_MAIN_INFO_SHOP'



function getMainInfoShop(payload){
    axios.get('/user?ID=12345')
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     // handle lỗi
     console.log(error);
   })
   return;
}