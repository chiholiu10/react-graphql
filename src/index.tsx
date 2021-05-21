import React from 'react';
import ReactDOM from 'react-dom';
import episodes from './reducers';
import thunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import history from "./history";
import { applyMiddleware, createStore } from 'redux';

const store = createStore(
  episodes,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
