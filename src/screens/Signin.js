import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DarkButton from '../components/reusable/Button/DarkButton';
import Input from '../components/reusable/PasscodeInput/Input';
import ForwardArrow from '../components/reusable/Arrow/ForwardArrow';
import {userLogin} from '../redux/actions/auth/auth';
import {useDispatch, useSelector} from 'react-redux';

export default function Signin({navigation}) {
  const [codeCreated, setCodeCreated] = useState(false);
  const [code, setCode] = useState(false);
  const [existingPasscode, setExistingPasscode] = useState('');
  const dispatch = useDispatch();
  const {passcode} = useSelector(state => state.Auth);
  const isSucessfullyCreate = (boolean, code) => {
    setCodeCreated(boolean);
    setCode(code);
  };

  useEffect(() => {
    setExistingPasscode(passcode);
  }, [passcode]);

  const loginHandler = () => {
    if (existingPasscode == code) {
      dispatch(userLogin());
      navigation.navigate('walletHome');
    } else {
      // alert('Wrong Passcode');
      // return;
      navigation.navigate('walletHome');

    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      <View style={styles.passcodeWrapper}>
        <Text style={styles.passcodeHeading}>
          Put your 6 Digit passcode to login into your account
        </Text>
        <Input login={true} isSucessfullyCreate={isSucessfullyCreate} />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Login"
          onPress={loginHandler}
          disabled={!codeCreated}
        />
        <Text style={styles.restoreText}>Restore Drau account</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Signup</Text>
          <ForwardArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  passcodeWrapper: {
    flex: 2.2,
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins-Medium',
  },
  passcodeHeading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: (0, 80, 0, 80),
  },
  restoreText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
