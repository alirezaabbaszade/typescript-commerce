import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'material-icons/iconfont/material-icons.css';
import './assets/scss/index.scss'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);