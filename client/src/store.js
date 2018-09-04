import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from './reducers';

const middleware = [promise];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
