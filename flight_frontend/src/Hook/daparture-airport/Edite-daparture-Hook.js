import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseEditedapartureData } from "Api/daparture-airport/Use-Edite-daparture-Api";
import { EditedapartureInfo } from "Redux/daparture-airport/Edite-daparture-Redux";





export const EditedapartureApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditedapartureData(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditedapartureInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetdapartureHook');

        notify("The AirPort  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
