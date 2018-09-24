import _ from 'lodash';
import { FETCH_PRODUCTS, FETCH_PRODUCT, SEARCH_PRODUCTS, FETCH_ALL_PRODUCTS } from '../actions/products';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload['data'], 'id');
    case FETCH_ALL_PRODUCTS:
      return _.mapKeys(action.payload['data'], 'id');
    case FETCH_PRODUCT:
      return { ...state, [action.payload['data'].id]: action.payload['data'] };
    case SEARCH_PRODUCTS:
      return _.mapKeys(action.payload['data'], 'id');
    default:
      return state;
  }
}