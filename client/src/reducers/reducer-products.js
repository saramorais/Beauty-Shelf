import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload['data'], 'id');
    case FETCH_PRODUCT:
      return { ...state, [action.payload['data'].id]: action.payload['data'] };
    default:
      return state;
  }
}