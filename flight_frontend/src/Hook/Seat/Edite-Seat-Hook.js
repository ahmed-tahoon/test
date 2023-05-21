import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseEditeSeatData } from "Api/Seats/Use-Edite-Seat-Api";
import { EditeSeatInfo } from "Redux/Seat/Edite-Saet-Redux";






export const EditeSeatApi = (formdata) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    console.log(formdata);

    return useMutation((formdata)=> (UseEditeSeatData(formdata)), {
      onSuccess: res => {
        
        
         dispatch(EditeSeatInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetSeatHook');

        notify("The Seat  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
