import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCreateEmail} from '../../redux/actions/auth/auth';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

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
        <Text style={styles.emailText}>Your Email </Text>

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

        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.loginText}>Login</Text>
          <Icon name="right" color="#000000" size={18} />
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
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 37,
  },
  loginText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
