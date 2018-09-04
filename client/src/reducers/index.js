import { combineReducers } from 'redux';

import usersReducer from './reducer-users';
import productsReducer from './reducer-products';
import authReducer from './reducer-auth';

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  currentUser: authReducer
});