import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const CREATE_USER = 'CREATE_USER';
export const EDIT_USER = 'EDIT_USER';

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
