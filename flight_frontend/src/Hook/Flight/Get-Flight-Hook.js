
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';
import { UseGetFlightApi } from "Api/Flight/Use-Get-Flight-Api";
import { GetFlightInfo } from "Redux/Flight/Get-Flight-Redux";
import notify from "utils/useNotifaction";


export const GetFlightHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetFlightHook",UseGetFlightApi, {
      onSuccess: res => {
        
        
         dispatch(GetFlightInfo(res));
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



