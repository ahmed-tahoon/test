
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetAirPortBasecCityApi } from "Api/daparture-airport/Get-Airbort-Based-City-Api";
import { GetAirPortBasecCityInfo } from "Redux/daparture-airport/Get-Airport-Based-City-Redux";



export const GetAirPortBasecCityHook = (cityID,chickcity) => {
    const dispatch = useDispatch();
    const router = useRouter();

    return useQuery(["GetAirPortBasecCityHook",cityID],()=>UseGetAirPortBasecCityApi(cityID), {
      enabled:chickcity,
      onSuccess: res => {
        
        
         dispatch(GetAirPortBasecCityInfo(res));
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



