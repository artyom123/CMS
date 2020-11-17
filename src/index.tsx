import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'mobx-react';

import stores from './store/stores';

import App from './App';

import THEME from './constants/Theme';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <MuiThemeProvider theme={THEME}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
