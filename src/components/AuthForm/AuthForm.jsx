import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const AuthForm = ({
  children,
  description,
  login,
  link,
  linkPath,
}) => {
  return (
    <section className='auth'>
      <Link className='auth__logo' to='/' />
      <h2 className='auth__description'>{description}</h2>
      {children}
      <div className='auth__signin'>
        <p className='auth__login'>{login}</p>
        <Link className='link auth__login-link' to={linkPath}>{link}</Link>
      </div>
    </section>
  );
};

export default AuthForm;
