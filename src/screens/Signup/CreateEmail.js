import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCreateEmail} from '../../redux/actions/auth/auth';
import {useDispatch} from 'react-redux';

export default function CreateEmail({navigation}) {
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState(false);
  const dispatch = useDispatch();

  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmail(text);
      setEmailCorrect(false);
      return false;
    } else {
      setEmail(text);
      setEmailCorrect(true);
      saveData(text);
    }
  };

  const saveData = async text => {
    try {
      dispatch(userCreateEmail(text));
    } catch (e) {
      alert('Failed to save the data to the storage');
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
        <Text style={styles.emailText}>Your email</Text>

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
          onPress={() => navigation.navigate('confirmEmail')}
          disabled={!emailCorrect}
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
  loginText: {
    textAlign: 'center',
    marginTop: 81,
    fontFamily: 'Poppins-Medium',
  },
});
