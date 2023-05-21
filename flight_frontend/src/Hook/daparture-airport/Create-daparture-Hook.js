import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from 'utils/useNotifaction';
import { UseCreatedapartureApi } from 'Api/daparture-airport/Use-Create-daparture-Api';
import { CreatedapartureInfo,errors } from 'Redux/daparture-airport/Create-daparture-Redux';


export const CreatedapartureApi = data =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return(useMutation(UseCreatedapartureApi,{
        onSuccess: res => {
          const result = {
            status: res.status + '-' + res.statusText,
            headers: res.headers,
            data: res.data
          };
          console.log(result,"result");
           dispatch(CreatedapartureInfo(result.data));
          // localStorage.setItem('user', JSON.stringify(result.data));
          // localStorage.setItem('token', JSON.stringify(result.data.token));
          //  window.location.replace('/');
          notify("The AirPort  has been created","success")    
          QueryClient.invalidateQueries('GetdapartureHook');

        //   setTimeout(()=>{ router.history.push('/CarePlan');
        // },2000)
  
  
//    setTimeout(() => {
//       router.history.push('/');
//    }, 2000);
    
        },
        onError: err => {
          const result = {
            status: err.status + '-' + err.statusText,
            headers: err.headers,
            data: err?.response?.data?.message
          };
          // console.log(result,"eroorrrrrrrr");

          console.log(err);
          dispatch(errors(result?.data));

          //   dispatch(errorAtLogin(err.response.data.detail));
          //  return err;
         
          notify(result.data,"error")       
  
        }
      }))

} 
