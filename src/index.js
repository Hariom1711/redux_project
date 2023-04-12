import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service worker registered:', registration);
    }, function(error) {
      console.log('Service worker registration failed:', error);
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </React.StrictMode>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
