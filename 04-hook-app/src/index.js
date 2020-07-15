import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CounterApp } from './components/01-useState/CounterApp';
// import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

