
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseCreatecityApi  = async data => {
  console.log(data);
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.post(
    'city',data );
};


