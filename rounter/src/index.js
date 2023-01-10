import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);


reportWebVitals();