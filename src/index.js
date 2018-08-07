import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose, dispatch } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { post } from './reducers/posts';
import { menu } from './reducers/menus';
import { category } from './reducers/categories';
import { page } from './reducers/pages';



import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

const wordpress = combineReducers({post, menu, category, page});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  // ...options
});
const store = createStore(
  combineReducers({routing,wordpress}),
  composeEnhancers(applyMiddleware(promise(),thunk,logger))
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
