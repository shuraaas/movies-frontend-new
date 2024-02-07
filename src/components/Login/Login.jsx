import React from 'react';
import AuthForm from '../AuthForm';
import LoginForm from '../LoginForm';

const Login = ({ onLogin, resultLogin }) => {
  return (
    <AuthForm
      description='Рады видеть!'
      login='Ещё не зарегистрированы?'
      link='Регистрация'
      linkPath='/signup'
    >
      <LoginForm onLogin={onLogin} resultLogin={resultLogin} />
    </AuthForm>
  );
};

export default Login;
