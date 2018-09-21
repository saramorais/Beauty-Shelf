import _ from 'lodash';
import { FETCH_USERS, FETCH_USER, USER_ADD_PRODUCT, SEARCH_USERS } from '../actions/users';


export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload['data'], 'id');
    case FETCH_USER:
      return { ...state, [action.payload['data'].id]: action.payload['data'] };
    case USER_ADD_PRODUCT:
      return { ...state, [action.payload['data'].id]: action.payload['data'] };
    case SEARCH_USERS:
      return _.mapKeys(action.payload['data'], 'id');
    default:
      return state;
  }
}