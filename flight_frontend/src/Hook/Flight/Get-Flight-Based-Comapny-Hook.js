
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';
import notify from "utils/useNotifaction";
import { UseGetFlightBasedCompanyApi } from "Api/Flight/Use-Get-Flight-Based-Comapny-Api";
import { GetFlightBasedCompanyInfo } from "Redux/Flight/Get-Flight-Based-Comapny-Redux";



export const GetFlightBasedCompanyHook = IDAirLines => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [enabled, setEnabled] = useState(false)
    console.log(IDAirLines);

    return useQuery(["GetFlightBasedCompanyHook",IDAirLines],()=>UseGetFlightBasedCompanyApi(IDAirLines), {
    //   enabled:false,
    
      onSuccess: res => {
        
        console.log(res);
         dispatch(GetFlightBasedCompanyInfo(res));
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



