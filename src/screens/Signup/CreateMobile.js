import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Input from '../../components/reusable/PhoneInput/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userCreatePhone } from '../../redux/actions/auth/auth';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CreateMobile({ navigation }) {
  const [numberValid, setNumberValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch()


  const saveData = async (number) => {
    try {
      dispatch(userCreatePhone(number))
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const checkNumberIsValid = (boolean, number) => {
    setNumberValid(boolean);
    setPhoneNumber(number);
  };

  const nextButtonHandler = async () => {
    if (phoneNumber.length >= 10) {
      await saveData(phoneNumber);
      navigation.navigate('confirmMobile');
    } else {
      alert('Incorrect number');
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
        <Text style={styles.heading}>Your phone number</Text>
        <Input checkNumberIsValid={checkNumberIsValid} />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={nextButtonHandler}
          disabled={!numberValid}
        />
        <TouchableOpacity style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <View style={{flexDirection:"row"}}>
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
  },
  passcodeWrapper: {
    flex: 2.2,
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 37,
  },
  loginText: {
    textAlign: 'center',
    fontFamily : 'Poppins-Medium',
  }
});
