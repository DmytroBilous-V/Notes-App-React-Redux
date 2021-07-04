import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import Router from './pages/router';
import store from '../src/store/createStore';
import './index.css';

function App () {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
