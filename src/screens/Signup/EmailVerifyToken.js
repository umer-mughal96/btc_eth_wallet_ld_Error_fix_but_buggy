import React, {useEffect} from 'react';
import {useState} from 'react';
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
import {useSelector} from 'react-redux';

export default function EmailVerifyToken({navigation}) {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [existingConfirmationCode, setExistingConfirmationCode] = useState('');
  const [matchConfirmationCode, setMatchConfirmationCode] = useState(false);
  const [codeValidate, setCodeValidate] = useState(false);
  const {emailCode} = useSelector(s => s.User);

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
      // alert('Confirmation Code Dont Match');
      // setCodeValidate(false);
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
          <Text style={styles.emailText}>
            We have sent you a confirmation email contains code, write code here
            to confirm your email.
          </Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onCodeChangeHandler}
          value={confirmationCode}
          placeholder="Confirmation code here"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={validateConfirmationCodeHandler}
          disabled={!codeValidate}
        />
        <TouchableOpacity>
          <Text style={styles.loginText}>Login</Text>
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
    marginTop: 81,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    margin: 35,
    marginBottom: 0,
    marginTop: 0,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 37,
  },
  textWrapper: {
    margin: 20,
    marginBottom: 0,
  },
});
