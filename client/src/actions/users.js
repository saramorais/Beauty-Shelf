import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const FETCH_USER = 'FETCH_USER';
export const SEARCH_USERS = 'SEARCH_USERS';
export const USER_ADD_PRODUCT = 'USER_ADD_PRODUCT'; 

export function fetchUsers() {
  const request = axios.get(`/api/user`);
  return {
    type: FETCH_USERS,
    payload: request
  }
}

export function fetchAllUsers() {
  const request = axios.get(`/api/users`);
  return {
    type: FETCH_ALL_USERS,
    payload: request
  }
}

export function fetchUser(id) {
  const request = axios.get(`/api/user/${id}`);
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function searchUsers(term) {
  const request = axios.get(`/api/usersSearch/${term}`);
  return {
    type: SEARCH_USERS,
    payload: request
  }
}

export function userAddProduct(userId, productId, callback) {
  const request = axios({
    method: 'post',
    url: `/api/user/add_product`,
    data: {
      user_id: userId,
      product_id: productId
    }
  });
  return {
    type: USER_ADD_PRODUCT,
    payload: request
  }  
}