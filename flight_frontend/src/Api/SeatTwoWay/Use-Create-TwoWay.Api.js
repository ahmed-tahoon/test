
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseCreateTwoWayApi  = async data => {
  console.log(data);
  // const config = {
  //     headers: {
          
  //         token: localStorage.getItem("token")
  //     }
  // }
  return await BaseUrl.post(
    'Seat/two-way',data );
};


