
import { useMutation, useQuery } from "react-query"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'utils/useRouter';

import notify from "utils/useNotifaction";
import { UseGetcountryNavBarApi } from "Api/Country/Use-Get-Country-NavBar-Api";
import { GetcountryNavBarInfo } from "Redux/Country/Get-Country-NavBar-Redux";





export const GetcountryNavBarHook = id => {
  const dispatch = useDispatch();
  const router = useRouter();

  return useQuery([id, "GetcountryNavBarHook"], (id) => UseGetcountryNavBarApi(id), {
    onSuccess: res => {
      const countriesWithFlights = res.country.filter((country) =>
        country.city.some((city) => city.flight && city.flight.length !== 0)
      );

      const updatedRes = {
        ...res,
        country: countriesWithFlights,
      };

      dispatch(GetcountryNavBarInfo(res));
    },
    onError: err => {
      notify(err?.response?.data?.message, "error");
    }
  });
};




