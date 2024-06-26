/*
 *
 * ResetPassword actions
 *
 */

import { push } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  RESET_PASSWORD_CHANGE,
  RESET_PASSWORD_RESET,
  SET_RESET_PASSWORD_FORM_ERRORS
} from './constants';

import { signOut } from '../Login/actions';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const resetPasswordChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: RESET_PASSWORD_CHANGE,
    payload: formData
  };
};

export const resetPassword = token => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: 'required|min:6',
        confirmPassword: 'required|min:6|same:password'
      };
      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.password': 'Пароль обязателен.',
        'min.password': 'Пароль должен быть не менее 6 символов.',
        'required.confirmPassword': 'Подтверждение пароля обязательно.',
        'min.confirmPassword': 'Подтверждение пароля должно быть не менее 6 символов.',
        'same.confirmPassword': 'Подтверждение пароля и пароль должны совпадать.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors
        });
      }

      const response = await axios.post(`${API_URL}/auth/reset/${token}`, user);
      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success == true) {
        dispatch(push('/login'));
      }

      dispatch(success(successfulOptions));
      dispatch({ type: RESET_PASSWORD_RESET });
    } catch (error) {
      const title = `Пожалуйста, попробуйте снова сбросить пароль!`;
      handleError(error, dispatch, title);
    }
  };
};

export const resetAccountPassword = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        password: 'required|min:6',
        confirmPassword: 'required|min:6'
      };

      const user = getState().resetPassword.resetFormData;

      const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.password': 'Пароль обязателен.',
        'min.password': 'Пароль должен быть не менее 6 символов.',
        'required.confirmPassword': 'Подтверждение пароля обязательно.',
        'min.confirmPassword': 'Подтверждение пароля должно быть не менее 6 символов.'
      });

      if (!isValid) {
        return dispatch({
          type: SET_RESET_PASSWORD_FORM_ERRORS,
          payload: errors
        });
      }

      const response = await axios.post(`${API_URL}/auth/reset`, user);
      const successfulOptions = {
        title: `${response.data.message}`,
        position: 'tr',
        autoDismiss: 1
      };

      if (response.data.success === true) {
        dispatch(signOut());
      }

      dispatch(success(successfulOptions));
      dispatch({ type: RESET_PASSWORD_RESET });
    } catch (error) {
      const title = `Пожалуйста, попробуйте снова сбросить пароль!`;
      handleError(error, dispatch, title);
    }
  };
};
