import * as constants from '../actions/user/constants';

const iniitialState = {
  emailSent: false,
  emailCode: null,
  mobileCodeSent: false,
  mobileCode: null,
  loading: false,
};

export const User = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case constants.SET_USER_API_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.EMAIL_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        emailSent: true,
        emailCode: payload,
      };
    case constants.EMAIL_CODE_FAIL:
      return {
        ...state,
        emailSent: false,
        loading: false,
      };
    case constants.MOBILE_CODE_SUCCESS:
      return {
        ...state,
        mobileCode: payload,
        mobileCodeSent: true,
        loading: false,
      };
    case constants.MOBILE_CODE_FAIL:
      return {
        ...state,
        mobileCodeSent: false,
        loading: false,
      };
    case constants.RESET_USER_STATE:
      return {
        emailSent: false,
        emailCode: null,
        mobileCodeSent: false,
        mobileCode: null,
        loading: false,
      };
    default:
      return state;
  }
};
