
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetflightcompanyApi } from "Api/Company/Use-Get-Company";
import { GetflightCompanyInfo } from "Redux/Company/Get-Company-Redux";



export const GetflightCompanyHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetflightCompanyHook",UseGetflightcompanyApi, {
      onSuccess: res => {
        
        
         dispatch(GetflightCompanyInfo(res));
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



