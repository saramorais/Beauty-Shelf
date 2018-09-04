import { combineReducers } from 'redux';

import usersReducer from './reducer-users';
import productsReducer from './reducer-products';
import singleUserReducer from './reducer-single-user';
import singleProductReducer from './reducer-single-product';

import authReducer from './reducer-auth';

export default combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  currentUser: authReducer
});