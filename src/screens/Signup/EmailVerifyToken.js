import React, { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

export default function EmailVerifyToken({ navigation }) {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [existingConfirmationCode, setExistingConfirmationCode] = useState('');
  const [matchConfirmationCode, setMatchConfirmationCode] = useState(false);
  const [codeValidate, setCodeValidate] = useState(false);
  const { emailCode } = useSelector(s => s.User);

  useEffect(() => {
    setExistingConfirmationCode(emailCode);
  }, [emailCode]);

  const onCodeChangeHandler = code => {
    if (code.length == 6) {
      setCodeValidate(true);
      setConfirmationCode(code);
    } else {
      setCodeValidate(false);
      setConfirmationCode(code);
    }
  };

  const validateConfirmationCodeHandler = () => {
    if (confirmationCode == existingConfirmationCode) {
      setMatchConfirmationCode(true);
      navigation.navigate('createMobile');
    } else {
      alert('Confirmation Code Dont Match');
      setCodeValidate(false);
      setMatchConfirmationCode(true);
      navigation.navigate('createMobile');
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

      <View style={styles.emailWrapper}>
        <View style={styles.textWrapper}>
          <Text
            style={
              Platform.OS === 'ios'
                ? styles.emailText
                : {
                    fontFamily: 'Poppins-SemiBold',
                    textAlign: 'center',
                    marginBottom: 37,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }
            }>
            We have sent you a confirmation email contains code, write code here
            to confirm your email.
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={
              Platform.OS === 'ios'
                ? styles.input
                : {
                    width: 320,
                    padding: 15,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.5,

                    elevation: 5,
                  }
            }
            onChangeText={text => validate(text)}
            value={confirmationCode}
            placeholder="Confirmation Code Here"
          />
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={validateConfirmationCodeHandler}
          disabled={!codeValidate}
        />
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>Login</Text>
            <Icon name="right" color="#000000" size={18} />
          </View>
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
  emailWrapper: {
    flex: 2.2,

    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  input: {
    width: 320,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 37,
  },
  textWrapper: {
    margin: 40,
  },
});
