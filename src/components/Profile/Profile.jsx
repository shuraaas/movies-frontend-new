import React from 'react';
import validator from 'validator';
import Header from '../Header';
import MoviesNav from '../MoviesNav';
import { useForm } from 'react-hook-form';
import './index.css';

const Profile = ({ onLogout, onUpdate, user, resultUpdate }) => {
  const {
    register,
    formState: { isDirty, errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = userData => onUpdate(userData);

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='profile'>
        <h2 className='profile__title'>Привет, {user.name}!</h2>
        <form className='form form_type_edit' onSubmit={handleSubmit(onSubmit)} >
          <fieldset className='form__content form__content_type_profile'>
            <label className='form__field form__field_type_profile'>
              Имя
              <input
                className='form__input form__input_type_profile form__input_type_name'
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
            <label className='form__field form__field_type_profile'>
              E-mail
              <input
                className='form__input form__input_type_profile form__input_type_email'
                {...register('email', {
                  required: 'Поле обязательно',
                  validate: value => validator.isEmail(value) || 'Кажется вы ввели не почту',
                })}
              />
              {errors?.email && <span className='form__input-error job-input-error'>{errors?.email?.message || 'Что-то пошло не так...'}</span>}
            </label>
          </fieldset>
          <button className='btn btn_type_edit' type='submit' disabled={!isValid || !isDirty}>Редактировать</button>
          {resultUpdate?.message && <span className='profile__message'>{resultUpdate?.message}</span>}
        </form>
        <button className='btn btn_type_logout' type='button' onClick={onLogout}>Выйти из аккаунта</button>
      </section>
    </>
  );
};

export default Profile;
