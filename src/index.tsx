import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';

import './index.css';
import { store }  from './redux/store';
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();

