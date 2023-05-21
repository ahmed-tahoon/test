
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseCreateSeatApi  = async data => {
  console.log(data);
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.post(
    'Seat',data );
};


