import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';

import theme from './theme';
import routes from './routes';
import UserRoutes from './UserRoutes';

import B2BAdminRoutes from './B2BAdminRoutes';


import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const history = createBrowserHistory();
const queryClient = new QueryClient()
const user =JSON.parse(localStorage.getItem('user')) ;
console.log(user);
const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            {/* {renderRoutes(routes)} */}
            {user ? (user?.role === "superadmin" ? renderRoutes(routes):renderRoutes(B2BAdminRoutes)):(renderRoutes(UserRoutes))}

          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
