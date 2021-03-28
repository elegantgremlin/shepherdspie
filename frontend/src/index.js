import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import App from './App';
import { store, persistor } from './redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

axios.defaults.baseURL = 'http://localhost:4000/';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
