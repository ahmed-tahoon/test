
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { GetdapartureInfo } from "Redux/daparture-airport/Get-daparture-Redux";
import { UseGetdapartureApi } from "Api/daparture-airport/Use-Get-daparture-Api";



export const GetdapartureHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetdapartureHook",UseGetdapartureApi, {
      onSuccess: res => {
        
        
         dispatch(GetdapartureInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")       

      }
    });
  };



