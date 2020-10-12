/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Applying Middleware
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/Reducers/reducer';
import orderReducer from './store/Reducers/order';
import authReducer from './store/Reducers/auth';

import thunk from 'redux-thunk';

import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// Applying Middleware logger function to Project which simply logs
// the current store and current action

/* ----------------custom MiddleWare -------------- */

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log('[Middleware]', action);
//       const result = next(action);
//       console.log('[Middleware]', store.getState());
//       return result;
//     };
//   };
// };

/*------Redux Advanced compose for Middlewares using Thunk ------ */

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Adding enhance i-e applyMiddleware function from redux to store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
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
