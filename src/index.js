import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

if (process.env.REACT_APP_API_SERVER) {
  axios.defaults.baseURL = 'process.env.REACT_APP_API_SERVER';
}
if (localStorage.token) {
  axios.defaults.headers.common.Authorization = localStorage.token;
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app/').default; // eslint-disable-line global-require
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <NextApp />
          </div>
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root'),
    );
  });
  window.store = store;
}
