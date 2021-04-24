import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger"
import { getAllUsers } from './actions/users.action';
import './styles/index.scss';
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(getAllUsers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
