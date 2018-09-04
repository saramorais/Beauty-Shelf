import _ from 'lodash';
import { FETCH_USERS, USER_ADD_PRODUCT, FETCH_USER } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload['data'], 'id');
    case FETCH_USER:
      // if(action.payload['data']) {
      //   return { ...state, [action.payload['data'].id]: action.payload['data'] };
      // } else {
      //   return state;
      // }
      return { ...state, [action.payload['data'].id]: action.payload['data'] };
    case USER_ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}