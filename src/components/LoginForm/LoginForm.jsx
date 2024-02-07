import React from 'react';
import validator from 'validator';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onLogin, resultLogin }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (userData) => {
    onLogin(userData);
    reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='form__content form__content_type_login'>
        <label className='form__field'>
          E-mail
          <input
            className='form__input'
            placeholder='E-mail'
            {...register('email', {
              required: 'Поле обязательно',
              validate: value => validator.isEmail(value) || 'Кажется вы ввели не почту',
            })}
          />
          {errors?.email && <span className='form__input-error job-input-error'>{errors?.email?.message || 'Что-то пошло не так...'}</span>}
        </label>
        <label className='form__field'>
          Пароль
          <input
            className='form__input'
            placeholder='Пароль'
            type='password'
            {...register('password', {
              required: 'Поле обязательно',
            })}
          />
          {errors?.password && <span className='form__input-error job-input-error'>{errors?.password?.message || 'Что-то пошло не так...'}</span>}
        </label>
      </fieldset>
      {resultLogin?.message && <span className='form__message'>{resultLogin?.message}</span>}
      <button type='submit' className='btn btn_type_auth' disabled={!isValid}>Войти</button>
    </form>
  );
};

export default LoginForm;
