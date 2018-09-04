import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const CREATE_USER = 'CREATE_USER';
export const EDIT_USER = 'EDIT_USER';
export const USER_ADD_PRODUCT = 'USER_ADD_PRODUCT';

export function fetchUsers() {
  const request = axios.get(`/api/user`);
  return {
    type: FETCH_USERS,
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

export function fetchProducts() {
  const request = axios.get(`/api/product`);
  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function fetchProduct(id) {
  const request = axios.get(`/api/product/${id}`);
  return {
    type: FETCH_PRODUCT,
    payload: request
  }
}

export function firstLogin(data) {
  const request = axios({
    method: 'post',
    url: '/api/user/login',
    data: {
      email: data.email,
      password: data.password
    }
  });
  return {
    type: USER_LOGIN,
    payload: request
  }
}

export function userLogin(data, callback) {
  const request = axios({
    method: 'post',
    url: '/api/user/login',
    data: {
      email: data.email,
      password: data.password
    }
  })
  .then(function(response) {
    callback(response.data);
    return response;
  })
  .catch(function(error) {
    console.log(error);
  });
  return {
    type: USER_LOGIN,
    payload: request
  }
}

export function userLogout() {
  const request = axios.delete('/api/user/logout');
  return {
    type: USER_LOGOUT,
    payload: request
  }
}

export function createUser(data, callback) {
  const request = axios({
    method: 'post',
    url: `/api/user`,
    data: {
      email: data.email,
      password: data.password
    }
  })
  .then(function(response) {
    callback(response.data);
    return response;
  })
  .catch(function(error) {
    console.log(error);
  });
  return {
    type: CREATE_USER,
    payload: request
  }
}

export function editUser(data, userId, callback) {
  const request = axios({
    method: 'put',
    url: `/api/user/${userId}`,
    data: {
      about: data.about,
      picture: data.picture,
      website: data.website,
      hairtype: data.hairtype,
      skintype: data.skintype,
      hairstatus: data.hairstatus,
      name: data.name,
      location: data.location
    }
  })
  .then(function(response) {
    callback();
    return response;
  })
  .catch(function(error) {
    console.log(error);
  });
  return {
    type: EDIT_USER,
    payload: request
  }
}

export function userAddProduct(userId, productId) {
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