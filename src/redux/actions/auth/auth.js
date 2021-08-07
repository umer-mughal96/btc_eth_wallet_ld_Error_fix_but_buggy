import * as constants from './constants';

export const userLogin = (data, navigation) => async dispatch => {
  try {
    dispatch({type: constants.SET_AUTH_LOADING});
    dispatch({type: constants.LOGIN_SUCCESS});
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({type: constants.LOGIN_FAIL, payload: err});
  }
};
export const referralScreen = reff => async dispatch => {
  try {
    dispatch({type: constants.SET_AUTH_LOADING});
    dispatch({type: constants.REFF_SUCCESS, payload: reff});
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({type: constants.REFF_FAIL, payload: err});
  }
};

export const userCreatePasscode = passcode => async dispatch => {
  try {
    dispatch({type: constants.SET_AUTH_LOADING});
    dispatch({type: constants.CREATE_PASSCODE_SUCCESS, payload: passcode});
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({type: constants.AUTH_ERROR, payload: err});
  }
};

export const userLogout = (data, navigation) => async dispatch => {
  try {
    dispatch({type: constants.SET_AUTH_LOADING});
    dispatch({type: constants.LOGOUT_SUCCESS});
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({type: constants.LOGOUT_FAIL, payload: err});
  }
};



export const userCreateEmail = email => async dispatch => {
  try {
    dispatch({type: constants.SET_AUTH_LOADING});
    dispatch({type: constants.CREATE_EMAIL_SUCCESS, payload: email});
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({type: constants.AUTH_ERROR, payload: err});
  }
};

export const userCreatePhone = phone => async dispatch => {

};
