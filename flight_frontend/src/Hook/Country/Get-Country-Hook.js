
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetcountryApi } from "Api/Country/Use-Get-Country-Api";
import { GetcountryInfo } from "Redux/Country/Get-Country-Redux";



export const GetcountryHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetcountryHook",UseGetcountryApi, {
      onSuccess: res => {
        
        
         dispatch(GetcountryInfo(res));
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



