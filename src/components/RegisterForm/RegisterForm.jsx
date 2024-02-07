import React from 'react';
import validator from 'validator';
import { useForm } from 'react-hook-form';

const RegisterForm = ({ onRegister, resultRegister }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (userData) => {
    onRegister(userData);
    reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='form__content form__content_type_register'>
        <label className='form__field'>
          Имя
          <input
            className='form__input'
            placeholder='Имя'
            {...register('name', {
              required: 'Поле обязательно',
              minLength: {
                value: 2,
                message: 'Минимальная длина поля 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Максимальная длина поля 30 символов',
              },
              pattern: {
                value: /[\wа-я\sё]/gi,
                message: 'Только латиница, кириллица, пробел или дефис'
              },
            })}
          />
          {errors?.name && <span className='form__input-error job-input-error'>{errors?.name?.message || 'Что-то пошло не так...'}</span>}
        </label>
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
      {resultRegister?.message && <span className='form__message'>{resultRegister?.message}</span>}
      <button type='submit' className='btn btn_type_auth' disabled={!isValid}>Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
