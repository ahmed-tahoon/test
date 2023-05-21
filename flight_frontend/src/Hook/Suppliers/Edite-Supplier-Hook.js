import { useMutation, useQuery, useQueryClient } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseEditesupplierData } from "Api/Suppliers/Use-Edite-Supplier-Api";
import { EditesupplierInfo } from "Redux/Suppliers/Edite-Supplier-Redux";




export const EditesupplierApi = (FormData) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const QueryClient = useQueryClient();
    return useMutation((FormData)=> (UseEditesupplierData(FormData)), {
      onSuccess: res => {
        
        
         dispatch(EditesupplierInfo(res));
        // localStorage.setItem('user', JSON.stringify(result.data));
        // localStorage.setItem('token', JSON.stringify(result.data.token));
        //  window.location.replace('/');
        // router.history.push('/');
        QueryClient.invalidateQueries('GetsupplierHook');

        notify("The supplier  has been Edite","success")    


  
      },
      onError: err => {
        // console.log(err.response.data.message);
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
        notify(err?.response?.data?.message,"error")      

      }
    });
  };
