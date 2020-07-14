import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

