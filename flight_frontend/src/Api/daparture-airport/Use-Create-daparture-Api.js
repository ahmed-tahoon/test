
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseCreatedapartureApi  = async data => {
  console.log(data);
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.post(
    'daparture-airport',data );
};


