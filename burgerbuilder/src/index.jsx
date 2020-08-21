/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Applying Middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/Reducers/reducer';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// Applying Middleware logger function to Project which simply logs
// the current store and current action

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware]', action);
      const result = next(action);
      console.log('[Middleware]', store.getState());
      return result;
    };
  };
};

// Adding enhance i-e applyMiddleware function from redux to store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
