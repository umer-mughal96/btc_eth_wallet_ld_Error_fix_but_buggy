import * as constants from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as services from '../../../services/user';

export const sendEmailForCode = (data, navigation) => async dispatch => {
  console.log('🚀 ~ file: user.js ~ line 6 ~ data', data);
  try {
    dispatch({type: constants.SET_USER_API_LOADING});
    const res = await services.emailForCode(data);
    console.log('🚀 ~ file: user.js ~ line 10 ~ res', res);
    if (res.status == 200) {
      dispatch({type: constants.EMAIL_CODE_SUCCESS, payload: res.data.code});
      navigation.navigate('verifyEmail');
    }
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({
      type: constants.EMAIL_CODE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const sendMobileForCode = (data, navigation) => async dispatch => {
  try {
    dispatch({type: constants.SET_USER_API_LOADING});

    const res = await services.mobileForCode(data);
    console.log(res.data.code);
    if (res.status == 200) {
      dispatch({type: constants.MOBILE_CODE_SUCCESS, payload: res.data.code});
      navigation.navigate('verifyMobile');
    }
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({
      type: constants.MOBILE_CODE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const registerUser = (navigation, recoverySeed) => async dispatch => {
  try {
    // let email = await AsyncStorage.getItem('email');
    // let phone = await AsyncStorage.getItem('phoneNumber');
    // let data = {
    //   email,
    //   phone,
    //   recoverySeed,
    // };

    // dispatch({type: constants.SET_USER_API_LOADING});
    // const res = await services.signupUser(data);
    // console.log(res.data);
    // if (res.status == 201) {
    //   dispatch({type: constants.REGISTER_USER_SUCCESS});
    //   navigation.navigate('Signin');
    // }
    navigation.navigate('Signin');
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({
      type: constants.REGISTER_USER_FAIL,
      payload: err.response.data.error,
    });
  }
};
