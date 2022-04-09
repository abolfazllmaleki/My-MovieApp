import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'flowbite'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
// import PageReducer from './Reducer'
import {PageReducer} from './Reducer'


ReactDOM.render(
  
  <Provider store={createStore(PageReducer)}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

