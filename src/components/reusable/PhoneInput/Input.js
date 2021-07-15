import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function Input(props) {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  const onTypeHandler = number => {
    if (number.length >= 10) {
      setValue(number);
      setValid(true);
      props.checkNumberIsValid(true, number);
    } else {
      setValue(number);
      setValid(false);
      props.checkNumberIsValid(false, number);
    }
  };

  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="US"
        onChangeFormattedText={onTypeHandler}
        withDarkTheme
        withShadow
        autoFocus
        placeholder="000-0000-00"
      />
    </View>
  );
}
