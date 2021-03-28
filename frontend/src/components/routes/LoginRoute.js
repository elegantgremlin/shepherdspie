import React from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/users/actions';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

const LoginRoute = () => {
  const dispatch = useDispatch();

  function onLogin(username, password) {
    dispatch(login({ username, password }));
  }

  function onRegister(username, password) {
    dispatch(register({ username, password }));
  }

  return (
    <div className="flexbox-row">
      <LoginForm onLogin={onLogin} />
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default LoginRoute;
