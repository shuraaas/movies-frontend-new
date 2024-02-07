import React from 'react';
import AuthForm from '../AuthForm';
import RegisterForm from '../RegisterForm';

const Register = ({ onRegister, resultRegister }) => {
  return (
    <AuthForm
      description='Добро пожаловать!'
      login='Уже зарегистрированы?'
      link='Войти'
      linkPath='/signin'
    >
      <RegisterForm onRegister={onRegister} resultRegister={resultRegister} />
    </AuthForm>
  );
};

export default Register;
