import {constants} from 'buffer';
import * as authConstants from '../actions/auth/constants';

const iniitialState = {
  email: '',
  phone: '',
  signup: false,
  login: false,
  loading: false,
  passcode: null,
  error: null,
};

export const Auth = (state = iniitialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case authConstants.SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        login: false,
        loading: false,
      };
    case authConstants.CREATE_PASSCODE_SUCCESS:
      return {
        ...state,
        passcode: payload,
        loading: false,
      };
    case authConstants.CREATE_EMAIL_SUCCESS:
      return {
        ...state,
        email: payload,
        loading: false,
      };
    case authConstants.CREATE_PHONE_SUCCESS:
      return {
        ...state,
        phone: payload,
        loading: false,
      };
    case authConstants.LOGIN_FAIL:
    case authConstants.LOGOUT_FAIL:
    case authConstants.AUTH_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
