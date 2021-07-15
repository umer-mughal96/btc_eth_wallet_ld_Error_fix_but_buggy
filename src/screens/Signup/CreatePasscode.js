import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Input from '../../components/reusable/PasscodeInput/Input';

export default function CreatePasscode({navigation}) {
  const [codeCreated, setCodeCreated] = useState(false);

  const isSucessfullyCreate = boolean => {
    setCodeCreated(boolean);
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
        <Text style={styles.passcodeHeading}>Create your 6 Digit passcode</Text>
        <Input isSucessfullyCreate={isSucessfullyCreate} />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={() => navigation.navigate('confrimPasscode')}
          disabled={!codeCreated}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
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
  loginText: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins-Medium',
  },
  passcodeHeading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
