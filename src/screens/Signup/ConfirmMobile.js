import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {sendMobileForCode} from '../../redux/actions/user/user';

export default function CreateMobile({navigation}) {
  const [existingMobileNumber, setExistingMobileNumber] = useState('');
  const [numberValid, setNumberValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const {phone} = useSelector(s => s.Auth)

  const checkNumberIsValid = (boolean, number) => {
    setNumberValid(boolean);
    setPhoneNumber(number);
  };

  const nextButtonHandler = async () => {
    if (existingMobileNumber == phoneNumber) {
      let data = {
        mobile: existingMobileNumber,
      };
      // dispatch(sendMobileForCode(data,navigation));
      navigation.navigate('verifyMobile');
      
    } else {
      // alert('Incorrect number');
      navigation.navigate('verifyMobile');
    }
  };

  useEffect(() => {
    setExistingMobileNumber(phone)
  }, [phone]);

  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      <View style={styles.passcodeWrapper}>
        <Text style={styles.heading}>Confirm phone number</Text>
        <Input checkNumberIsValid={checkNumberIsValid} />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={nextButtonHandler}
          disabled={!numberValid}
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
    marginTop: 81,
    fontFamily: 'Poppins-Medium',
  },
});
