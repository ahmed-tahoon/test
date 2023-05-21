

import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetOnecountryApi } from "Api/Country/Use-Get-One-Country-Api";
import { GetOnecountryInfo } from "Redux/Country/Get-One-Country-Redux";




export const GetOnecountryHook = (country,called) => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery([country,"GetOnecountryHook"],()=>UseGetOnecountryApi(country), {
      enabled: called,

      onSuccess: res => {
        
        
         dispatch(GetOnecountryInfo(res));
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



