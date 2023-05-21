
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseSigninApi  = async data => {
  console.log(data);
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.post(
    'users/signin',data );
};


