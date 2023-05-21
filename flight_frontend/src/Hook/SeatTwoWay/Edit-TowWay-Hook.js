import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";

import { EditeTowWayInfo } from "Redux/SeatTwoWay/Edit-TowWay-Redux";
import { UseEditeTowWayData } from "Api/SeatTwoWay/Use-Edit-TowWay-Api";






export const EditeTowWayApi = (formdata) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    console.log(formdata);

    return useMutation((formdata)=> (UseEditeTowWayData(formdata)), {
      onSuccess: res => {
        
        
         dispatch(EditeTowWayInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetSeatTwoWayHook');

        notify("The TowWay  has been Edit","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
