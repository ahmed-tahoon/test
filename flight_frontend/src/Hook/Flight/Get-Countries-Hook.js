
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';
import { UseGetCountriesApi } from "Api/Flight/Use-Get-Countries-Api";
import { GetCountriesInfo } from "Redux/Flight/Get-Countries-Redux";
import notify from "utils/useNotifaction";


export const GetCountriesHook = id => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery([id,"GetCountriesHook"],()=>UseGetCountriesApi(id), {
      onSuccess: res => {
        console.log(res.flight,"GetCountriesHook")
        
          dispatch(GetCountriesInfo(res.flight));
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



