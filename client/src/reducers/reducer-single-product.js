import { FETCH_PRODUCT } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PRODUCT:
      return action.payload['data'];
    default:
      return state;
  }
}