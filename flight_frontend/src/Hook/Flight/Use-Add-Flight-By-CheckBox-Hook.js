import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseAddFlightByCheckBoxtData } from "Api/Flight/Use-Add-Flight-By-CheckBox-Api";
import { AddFlightByCheckBoxtInfo } from "Redux/Flight/Use-Add-Flight-By-CheckBox-Redux";





export const AddFlightByCheckBoxtApi = (formdata) => {
    const dispatch = useDispatch();
    const router = useRouter();
 

    const QueryClient = useQueryClient();
    return useMutation((formdata)=> (UseAddFlightByCheckBoxtData(formdata)), {
      onSuccess: res => {
        
        
         dispatch(AddFlightByCheckBoxtInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetFlightHook');
        // QueryClient.invalidateQueries('GetcountryNavBarHook');
      


       
        notify("The Flight  has been added","success")    
        window.location.reload(); // Reload the page


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
