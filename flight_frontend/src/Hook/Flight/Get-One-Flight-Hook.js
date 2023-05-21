
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';
import notify from "utils/useNotifaction";
import { UseGetOneFlightApi } from "Api/Flight/Use-Get-One-Flight-Api";
import { GetOneFlightInfo } from "Redux/Flight/Get-One-Flight-Redux";


export const GetOneFlightHook = id => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [enabled, setEnabled] = useState(false)
    return useQuery(["GetOneFlightHook",id],(id)=>UseGetOneFlightApi(id), {
      enabled:false,
      onSuccess: res => {
        
        console.log(res);
         dispatch(GetOneFlightInfo(res));
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



