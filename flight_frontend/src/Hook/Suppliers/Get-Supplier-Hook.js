
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { GetsupplierInfo } from "Redux/Suppliers/Get-Supplier-Redux";
import { UseGetsupplierApi } from "Api/Suppliers/Use-Get-Supplier-Api";


export const GetsupplierHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetsupplierHook",UseGetsupplierApi, {
      onSuccess: res => {
        
        
         dispatch(GetsupplierInfo(res));
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



