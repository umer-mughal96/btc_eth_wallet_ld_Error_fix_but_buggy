import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {sendEmailForCode} from '../../redux/actions/user/user';

export default function ConfirmEmail({navigation}) {
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [emailMatch, setEmailMatch] = useState(false);
  const [existingEmail, setExistingEmail] = useState('');
  console.log(
    '🚀 ~ file: ConfirmEmail.js ~ line 21 ~ ConfirmEmail ~ existingEmail',
    existingEmail,
  );
  const dispatch = useDispatch();
  const auth = useSelector(s => s.Auth);
  console.log("🚀 ~ file: ConfirmEmail.js ~ line 27 ~ ConfirmEmail ~ auth", auth)

  useEffect(() => {
    setExistingEmail(auth.email);
  }, [auth.email]);

  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmail(text);
      console.log('Email is Not Correct');
      setEmailCorrect(false);
      return false;
    } else if (existingEmail == text) {
      setEmail(text);
      setEmailCorrect(true);
      setEmailMatch(true);
    } else {
      setEmail(text);
      setEmailCorrect(true);
      setEmailMatch(false);
    }
  };

  const emailHandler = () => {
    let data = {
      email,
    };
    // dispatch(sendEmailForCode(data, navigation));
    navigation.navigate('verifyEmail');
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
        <Text style={styles.emailText}>Confirm your Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => validate(text)}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={() => navigation.navigate('verifyEmail')}
          // disabled={!emailMatch}
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
    width: 320,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 37,
  },
});
