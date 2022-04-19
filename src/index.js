import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> ,
  document.getElementById('root')
);