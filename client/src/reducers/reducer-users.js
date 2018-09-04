import _ from 'lodash';
import { FETCH_USERS, USER_ADD_PRODUCT } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_USERS:
      // return action.payload['data'];
      return _.mapKeys(action.payload['data'], 'id');
    case USER_ADD_PRODUCT:
      return state;
    default:
      return state;
  }
}