import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useDispatch } from 'react-redux';
import { userCreatePasscode } from '../../../redux/actions/auth/auth';


export default function Input(props) {
  const [code, setCode] = useState('');
  let pinInput = React.createRef();
  const dispatch = useDispatch();
  
  const _checkCode = code => {
    if (code == '123456') {
      pinInput.current.shake().then(() => setCode(''));
      props.isSucessfullyCreate(false);
    }
  };

  const changeTextHandler = code => {
    setCode(code);
    if (code.length < 6) {
      props.isSucessfullyCreate(false);
    } else {
      if (props.login !== true) {
        saveData(code);
        // generateMnemonic();
      } else {
        props.isSucessfullyCreate(true, code);
      }
    }
  };

  // const generateMnemonic = async () => {
  //   try {
  //     const mnemonic = bip39.generateMnemonic();
  //     // => 'seed sock milk update focus rotate barely fade car face mechanic mercy'

  //     bip39.mnemonicToSeed('basket actual').then(console.log);
  //   } catch (e) {
  //     return false;
  //   }
  // };

  const saveData = async code => {
    try {
      dispatch(userCreatePasscode(code))
      props.isSucessfullyCreate(true);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  return (
    <View>
      <SmoothPinCodeInput
        ref={pinInput}
        cellStyle={{
          borderBottomWidth: 2,
          borderColor: 'gray',
        }}
        cellStyleFocused={{
          borderColor: 'black',
        }}
        onFulfill={_checkCode}
        containerStyle={{marginLeft: 50, marginRight: 50}}
        codeLength={6}
        value={code}
        onTextChange={changeTextHandler}
        keyboardType="numeric"
      />
    </View>
  );
}
