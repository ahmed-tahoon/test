import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseEditeflightcompanyData } from "Api/Company/Use-Edite-Company";
import { EditeflightCompanyInfo } from "Redux/Company/Edite-Company-Redux";





export const EditeflightCompanyApi = (FORMDATA) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FORMDATA)=> (UseEditeflightcompanyData(FORMDATA)), {
      onSuccess: res => {
        
        
         dispatch(EditeflightCompanyInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetflightCompanyHook');

        notify("The flightCompany  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
