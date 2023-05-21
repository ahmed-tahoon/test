
import BaseUrl from '../../BaseUrl/BaseUrl'


export const UseCreateflightcompanyApi  = async data => {
  console.log(data);
  const config = {
      headers: {
    "Content-Type": "multipart/form-data",

          // token: localStorage.getItem("token")
      }
  }
  return await BaseUrl.post(
    'flight-company',data,config );
};


