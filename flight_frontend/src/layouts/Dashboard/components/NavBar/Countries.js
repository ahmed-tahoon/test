import { AssignmentReturnedRounded } from '@material-ui/icons';
import { GetcountryNavBarHook } from 'Hook/Country/Get-Country-NavBar-Hook';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Countries() {
  const id = JSON.parse(localStorage.getItem('user'))?.id;
  const { data } = GetcountryNavBarHook(id);
  const { GetcountryNavBarData } = useSelector(
    state => state.GetcountryNavBarRedux
  );

  console.log(GetcountryNavBarData,"ahmed2");
  const navCountry = GetcountryNavBarData?.country;
  const [countryNavBar, setcountryNavBar] = useState();
  useEffect(() => {
    if (GetcountryNavBarData) {
      console.log(GetcountryNavBarData,"gfdgdfgfdgf");
      localStorage.setItem('navbarcountry', JSON.stringify(navCountry));
      const navdata = JSON.parse(localStorage.getItem('navbarcountry'));
      setcountryNavBar(navdata);
    }
  }, [GetcountryNavBarData]);

  const [Countries, setCountries] = useState([]);
  var arr = [];
  var arrtwoway = [];

  useEffect(() => {
    if (countryNavBar?.length > 0) {
      for (let index = 0; index < countryNavBar?.length; index++) {
        if (countryNavBar[index]) {
          let cityarr = [];

          for (let i = 0; i < countryNavBar[index].city?.length; i++) {
            let arrival_airport = [];

            cityarr.push({
              text: countryNavBar[index].city[i]?.name,
              type: 'firstGroupnotFlex',

              menu: arrival_airport,

              link: `/seats/one-way/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.name}`
            });

            for (
              let id = 0;
              id < countryNavBar[index].city[i]?.flight?.length;
              id++
            ) {
              arrival_airport.push({
                text: ` ${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name} - ${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,
                link: `/seats/one-way/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,

                type: 'firstLink',
                active: `${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name} - ${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`
              });
            }
          }
          arr.push({
            type: 'firstGroupnotFlex',

            text: countryNavBar[index].name,
            link: `/seats/one-way/${countryNavBar[index].name}`,
            menu: cityarr
            // text:"city"
          });
          // for(let i = 0; i < countryNavBar[i]?.city?.length; i++){
          //   let country =countryNavBar[index]?.name

          //   let city = countryNavBar[index]?.city[i]?.name
          //   arr.push({
          //       title: country,
          //       href: `/seats/one-way/${country}`,
          //       children: [
          //           { title: city,
          //          href: `/seats/one-way/${country}/${city}`,

          //        }
          //          ]

          //     })
          // }
        }
      }
      return arr;
    }

    return () => {};
  }, [countryNavBar]);

  useEffect(() => {
    if (countryNavBar?.length > 0) {
      for (let index = 0; index < countryNavBar?.length; index++) {
        if (countryNavBar[index]) {
          let cityarr = [];

          for (let i = 0; i < countryNavBar[index].city?.length; i++) {
            let arrival_airport = [];

            cityarr.push({
              text: countryNavBar[index].city[i]?.name,
              menu: arrival_airport,
              type: 'firstGroupnotFlex',

              link: `/TwoWay/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.name}`
            });

            for (
              let id = 0;
              id < countryNavBar[index].city[i]?.flight?.length;
              id++
            ) {
              arrival_airport.push({
                type: 'firstLink',

                text: `${countryNavBar[index].city[i]?.flight[id]?.arrival_airport} - ${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name}`,
                link: `/TwoWay/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,
                active: `${countryNavBar[index].city[i]?.flight[id]?.arrival_airport} - ${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name}`
              });
            }
          }
          arrtwoway.push({
            text: countryNavBar[index].name,
            link: `/TwoWay/${countryNavBar[index].name}`,
            menu: cityarr,
            type: 'firstGroupnotFlex'
          });
          // for(let i = 0; i < countryNavBar[i]?.city?.length; i++){
          //   let country =countryNavBar[index]?.name

          //   let city = countryNavBar[index]?.city[i]?.name
          //   arr.push({
          //       title: country,
          //       href: `/seats/one-way/${country}`,
          //       children: [
          //           { title: city,
          //          href: `/seats/one-way/${country}/${city}`,

          //        }
          //          ]

          //     })
          // }
        }
      }
      return arrtwoway;
    }

    return () => {};
  }, [countryNavBar]);
  return { arr, arrtwoway };
}

export default Countries;
