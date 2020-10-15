import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TareaApp } from './components/08-useReducer/TareaApp';
// // import './components/08-useReducer/intro-reducer';
// // import { CallbackHook } from './components/06-memos/CallbackHook';
// // import { Padre } from './components/07-tarea-memo/Padre';
// // // import { MemoHook } from './components/06-memos/MemoHook';

ReactDOM.render(
  <React.StrictMode>
    <TareaApp />
  </React.StrictMode>,
  document.getElementById('root')
);
