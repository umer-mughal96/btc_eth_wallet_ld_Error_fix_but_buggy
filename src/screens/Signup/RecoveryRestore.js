import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../config/colors';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/actions/user/user';

export default function RecoveryRestore({navigation}) {
  const [RecoveryRestore , setRecoveryRestore] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles.firstBox}>
        <Text style={styles.RecoverySeed}>Recovery Seed</Text>
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
          value={RecoveryRestore}
          placeholder=" "
        />
        {/* value="SA122134PPKIASD" */}
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.RecoverySeed}>
        Enter your Recovery seed to restore your YFIC wallet
        </Text>
        <DarkButton
          name="Login"
          onPress={() => navigation.navigate('proceedScreen')}
        />
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
  RecoverySeed: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 44,
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
  secondBox: {
    flex: 2,
    padding: (0, 20, 0, 20),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  firstBox: {
    flex: 2,
    justifyContent: 'flex-end',
  },
});
