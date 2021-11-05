import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/scss/custome.scss"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
// const store=createStore(allReducers,enhancer)


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
