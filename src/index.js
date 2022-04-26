import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter> ,
  document.getElementById('root')
);