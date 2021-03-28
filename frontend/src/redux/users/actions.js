import axios from 'axios';
import * as types from './types';

export const registerPending = () => ({
  type: types.REGISTER_PENDING,
});

export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (payload) => ({
  type: types.REGISTER_FAILURE,
  payload,
});

export const register = (user) => function fn(dispatch) {
  dispatch(registerPending());
  axios.post('/users/register', user)
    .then((newUser) => registerSuccess(newUser))
    .catch((err) => registerFailure(err));
};

export const loginPending = () => ({
  type: types.LOGIN_PENDING,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const login = (user) => function fn(dispatch) {
  dispatch(loginPending());
  axios.post('/users/login', user)
    .then((newUser) => loginSuccess(newUser))
    .catch((err) => loginFailure(err));
};
