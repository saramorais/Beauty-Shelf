import { USER_LOGIN, USER_LOGOUT, CREATE_USER, EDIT_USER } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case USER_LOGIN:
      return action.payload['data'];
    case USER_LOGOUT:
      return null;
    case CREATE_USER:
      return action.payload['data'];
    case EDIT_USER:
      return action.payload['data'];
    default:
      return state;
  }
}