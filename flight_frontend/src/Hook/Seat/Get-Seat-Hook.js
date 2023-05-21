
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetSeatApi } from "Api/Seats/Use-Get-Seat-Api";
import { GetSeatInfo } from "Redux/Seat/Get-Saet-Redux";



export const GetSeatHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetSeatHook",UseGetSeatApi, {
      onSuccess: res => {
        
        
         dispatch(GetSeatInfo(res));
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



