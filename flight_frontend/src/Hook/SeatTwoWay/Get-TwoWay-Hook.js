
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { GetSeatTwoWayInfo } from "Redux/SeatTwoWay/Get-TwoWay-Redux";
import { UseGetSeatTwoWayApi } from "Api/SeatTwoWay/Use-Get-TwoWay-Api";




export const GetSeatTwoWayHook = formData => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery("GetSeatTwoWayHook",UseGetSeatTwoWayApi, {
      onSuccess: res => {
        
        
         dispatch(GetSeatTwoWayInfo(res));
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



