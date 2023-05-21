/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@material-ui/icons/AirlineSeatReclineExtraOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined';
import { Label } from 'components';
import Countries from './Countries';
import { useEffect } from 'react';
import { useState } from 'react';
import NoteIcon from '@material-ui/icons/Note';
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessIcon from '@material-ui/icons/Business';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FlightIcon from '@material-ui/icons/Flight';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
 const RoutesList=()=> {
  const [arr, setarr] = useState([])
  const [arrtwoway, setarrtwoway] = useState([])

  const items=Countries()
  console.log(arr,"ddddd");
  useEffect(() => {
console.log(items,"itemssss") 
if(items?.arr?.length>0){
  setarr(items?.arr)
  setarrtwoway(items?.arrtwoway)
}
    return () => {
      
    }
  }, [items])
 
return [
  {
    title: 'Pages',
    pages: [
      // {
      //   title: 'Overview',
      //   href: '/overview',
      //   icon: HomeIcon
      // },
      // {
      //   title: 'Dashboards',
      //   href: '/dashboards',
      //   icon: DashboardIcon,
      //   children: [
      //     {
      //       title: 'Default',
      //       href: '/dashboards/default'
      //     },
      //     {
      //       title: 'Analytics',
      //       href: '/dashboards/analytics'
      //     }
      //   ]
      // },
      {
        title: 'Booking',
        href: '/management',
        icon: ReceiptOutlinedIcon,
        children: [
          {
            title: 'Flights',
            href: '/Flight',
            icon: FlightIcon,
            children: [
              {
                title: 'Flights',
                icon: FlightIcon,

                href: '/Flight',
              },
              {
                title: 'Seats',
                icon:AirlineSeatReclineExtraIcon,
                children: [
                  {
                    title: 'One Way',
                    href: '/seats',
                    children: arr

                  },
                  {
                    title: 'Two Way',
                    href: '/TwoWay',
                    children: arrtwoway
                    
                  },
                 

                ]
              },
            ]

          },
          // {
          //   title: 'Hotels',
          //   href: '/management/customers/1/summary'
          // },
          // {
          //   title: 'Customers',
          //   href: '/management/customers'
          // },
          // {
          //   title: 'Customer Details',
          //   href: '/management/customers/1/summary'
          // },
          // {
          //   title: 'Projects',
          //   href: '/management/projects'
          // },
          // {
          //   title: 'Orders',
          //   href: '/management/orders'
          // },
          // {
          //   title: 'Order Details',
          //   href: '/management/orders/1'
          // }
        ]
      },
      {
        title: 'Entry',
        icon: SupervisorAccountIcon,
        children:[
          {
            title: 'Suppliers',
            href: '/Suppliers',
            icon: SupervisorAccountIcon
          },
          {
            title: 'Country',
            href: '/Country',
            icon: PublicIcon
          },
          {
            title: 'City',
            href: '/city',
            icon: LocationCityIcon
          },
          {
            title: 'AirLines',
            href: '/Company',
            icon: BusinessIcon
          },
          {
            title: 'AirPorts',
            href: '/AirPOrts',
            icon: LocalAirportIcon
          },

        ]

      },
       
      // {
      //   title: 'visa',
      //   href: '/social-feed',
      //   icon: PeopleIcon
      // },
      // {
      //   title: 'B2B',
      //   href: '/profile',
      //   icon: PersonIcon,
      //   children: [
      //     {
      //       title: 'Timeline',
      //       href: '/profile/1/timeline'
      //     },
      //     {
      //       title: 'Connections',
      //       href: '/profile/1/connections'
      //     },
      //     {
      //       title: 'Projects',
      //       href: '/profile/1/projects'
      //     },
      //     {
      //       title: 'Reviews',
      //       href: '/profile/1/reviews'
      //     }
      //   ]
      // },
      // {
      //   title: 'FAQ',
      //   href: '/projects',
      //   icon: FolderIcon,
      //   children: [
      //     {
      //       title: 'Browse',
      //       href: '/projects'
      //     },
      //     {
      //       title: 'Create',
      //       href: '/projects/create'
      //     },
      //     {
      //       title: 'Overview',
      //       href: '/projects/1/overview'
      //     },
      //     {
      //       title: 'Files',
      //       href: '/projects/1/files'
      //     },
      //     {
      //       title: 'Activity',
      //       href: '/projects/1/activity'
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: '/projects/1/subscribers'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoice',
      //   href: '/invoices/1',
      //   icon: ReceiptIcon
      // },
      // {
      //   title: 'Kanban Board',
      //   href: '/kanban-board',
      //   icon: ListAltIcon
      // },
      // {
      //   title: 'Mail',
      //   href: '/mail',
      //   icon: MailIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       2
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Chat',
      //   href: '/chat',
      //   icon: ChatIcon,
      //   label: () => (
      //     <Label
      //       color={colors.red[500]}
      //       shape="rounded"
      //     >
      //       4
      //     </Label>
      //   )
      // },
      // {
      //   title: 'Calendar',
      //   href: '/calendar',
      //   icon: CalendarTodayIcon,
      //   label: () => <Label color={colors.green[500]}>New</Label>
      // },
      // {
      //   title: 'Settings',
      //   href: '/settings',
      //   icon: SettingsIcon,
      //   children: [
      //     {
      //       title: 'General',
      //       href: '/settings/general'
      //     },
      //     {
      //       title: 'Subscription',
      //       href: '/settings/subscription'
      //     },
      //     {
      //       title: 'Notifications',
      //       href: '/settings/notifications'
      //     },
      //     {
      //       title: 'Security',
      //       href: '/settings/security'
      //     }
      //   ]
      // },
      // {
      //   title: 'Authentication',
      //   href: '/auth',
      //   icon: LockOpenIcon,
      //   children: [
      //     {
      //       title: 'Login',
      //       href: '/auth/login'
      //     },
      //     {
      //       title: 'Register',
      //       href: '/auth/register'
      //     }
      //   ]
      // },
      // {
      //   title: 'Errors',
      //   href: '/errors',
      //   icon: ErrorIcon,
      //   children: [
      //     {
      //       title: 'Error 401',
      //       href: '/errors/error-401'
      //     },
      //     {
      //       title: 'Error 404',
      //       href: '/errors/error-404'
      //     },
      //     {
      //       title: 'Error 500',
      //       href: '/errors/error-500'
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   title: 'Support',
  //   pages: [
  //     {
  //       title: 'Presentation',
  //       href: '/presentation',
  //       icon: PresentToAllIcon
  //     },
  //     {
  //       title: 'Getting started',
  //       href: '/getting-started',
  //       icon: CodeIcon
  //     },
  //     {
  //       title: 'Changelog',
  //       href: '/changelog',
  //       icon: ViewModuleIcon,
  //       label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
  //     }
  //   ]
  // }
];
 }
  
export default RoutesList
