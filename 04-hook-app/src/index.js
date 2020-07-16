import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';

ReactDOM.render(
  <React.StrictMode>
    <RealExampleRef />
  </React.StrictMode>,
  document.getElementById('root')
);

