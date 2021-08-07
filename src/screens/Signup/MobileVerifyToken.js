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
import Icon from 'react-native-vector-icons/AntDesign';

export default function MobileVerifyToken({navigation}) {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [existingConfirmationCode, setExistingConfirmationCode] = useState('');
  const [matchConfirmationCode, setMatchConfirmationCode] = useState(false);
  const [codeValidate, setCodeValidate] = useState(false);
  const {mobileCode} = useSelector(s => s.User);



  
  useEffect(() => {
    setExistingConfirmationCode(mobileCode);
  }, [mobileCode]);

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
      navigation.navigate('afterMobileVerify');
    } else {
      alert('Confirmation Code Dont Match');
      setCodeValidate(false);
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
            We have sent you a confirmation code to your number, write code here
            to confirm your number
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={
            Platform.OS === 'ios'
              ? styles.input
              : {
                  width: 250,
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
          placeholder="000-0000-00"
          
        />
        </View>
           {/* verifyMobile */}
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton   
          name="Next"
          onPress={validateConfirmationCodeHandler}
          disabled={!codeValidate}
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
    width: 200,
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
  textWrapper: {
    margin: 20,
    marginBottom: 0,
  },
});
