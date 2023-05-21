import React, { useEffect, useState } from 'react';
import Countries from './Dashboard/components/NavBar/Countries';

function Data() {
  const [arr, setarr] = useState([]);
  const [arrtwoway, setarrtwoway] = useState([]);
  const items = Countries();
  console.log(arr, 'ddddd');
  useEffect(() => {
    console.log(arr, 'itemssss');
    if (items?.arr?.length > 0) {
      setarr(items?.arr);
      setarrtwoway(items?.arrtwoway);
    }
    return () => {};
  }, [items]);
  return [
    {
      type: 'group',
      text: 'Menu'
    },
    {
      type: 'firstGroup',
      text: 'Bookings',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      menu: [
        {
          type: 'firstLink',
          text: 'Flights',
          link: '/Flight',
          active: 'Flights'
        },
        {
          type: 'firstGroupflex',
          text: 'Seats',
          active: 'Seats',

          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          ),
          menu: [
            {
              type: 'firstGroupnotFlex',
              text: 'One Way',
              link: '/seats/one-way/Ar/Ab',
              active: 'One Way',
              menu: arr
            },
            {
              type: 'firstGroupnotFlex',
              text: 'Two Way',
              link: '/twoway/Ar/Ab',
              active: 'Two Way',
              menu: arrtwoway
            }
          ]
        }
      ]
    },
    {
      type: 'firstGroup',
      text: 'Entry',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      menu: [
        {
          type: 'firstLink',
          text: 'Suppliers',
          link: '/Suppliers',
          active: 'Suppliers'
        },
        {
          type: 'firstLink',
          text: 'Country',
          link: '/Country',
          active: 'Country'
        },
        {
          type: 'firstLink',
          text: 'Cities',
          link: '/city',
          active: 'Cities'
        },
        {
          type: 'firstLink',
          text: 'Airlines',
          link: '/Company',
          active: 'Airlines'
        },
        {
          type: 'firstLink',
          text: 'Airports',
          link: '/Airports',
          active: 'Airports'
        }
      ]
    },
    {
      type: 'firstGroup',
      text: 'Hotels',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v6h14V3H5zm0 12v6h4v-6H5zm10 0v6h4v-6h-4zm-6-3h4m-4 3h4m-4 3h4m6-6h.01"
          />
        </svg>

      ),
      menu: [
     
      ]
    },
    {
      type: 'firstGroup',
      text: 'Services',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6l-2 2-2-2M5 13V6h14v7M7 9h10M9 17l-2 2-2-2M15 17l-2 2-2-2"
          />
        </svg>

      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'User mangement',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 20l9-9-9-9"
          />
        </svg>


      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'Permessions',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2c5.523 0 10 4.477 10 10v10H2V12c0-5.523 4.477-10 10-10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6"
          />
        </svg>


      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'Wallet mangement',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14"
          />
        </svg>


      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'Payment and Billing',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14v7M3 10v7m18-7v7M5 12h13m-11 4h7"
          />
        </svg>


      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'Settings',
      icon: (
        <svg
  className="w-5 h-5"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M19.14 11.268a8 8 0 01-.088 1.032l1.465 1.138a2 2 0 11-2.58 3.08l-1.381-1.07A7.963 7.963 0 0112 20a8 8 0 11-6.536-12.536A7.963 7.963 0 014 12c0-.345.026-.688.08-1.03L2.615 9.832a2 2 0 112.58-3.08l1.38 1.07a7.963 7.963 0 011.032-.087L8.738 4.48a2 2 0 013.08 2.58l-1.07 1.38zM12 14a2 2 0 100-4 2 2 0 000 4z"
  />
</svg>


      ),
      menu: [

      ]
    },
    {
      type: 'firstGroup',
      text: 'Reports',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v6h14V3H5zm0 12v6h4v-6H5zm10 0v6h4v-6h-4zm-6-3h4m-4 3h4m-4 3h4m6-6h.01"
          />
        </svg>

      ),
      menu: [

      ]
    },

  ];
}

export default Data;
