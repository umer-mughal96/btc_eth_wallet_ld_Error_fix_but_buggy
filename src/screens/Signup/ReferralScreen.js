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
import {referralScreen} from '../../redux/actions/auth/auth';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ReferralScreen({navigation}) {
  const [refdata, setRefdata] = useState('');
  const [refcorrect, setrefcorrect] = useState(false);
  const dispatch = useDispatch();

  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setRefdata(text);
      setrefcorrect(false);
      return false;
    } else {
      setRefdata(text);
      setrefcorrect(true);
      saveData(text);
    }
  };
  const saveData = async text => {
    try {
      dispatch(referralScreen(text));
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
      <View style={styles.refWrapper}>
        <Text style={styles.refText}>Referral Code</Text>

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
          value={refdata}
          placeholder="Referral Code"
        />
        <View style={{marginTop: '52%', width: '68%'}}>
          <Text style={styles.textcenter}>
            *You will only be eligible to receive your signup bonus after
            completing       {"\n"}                your account setup.
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.buttonsWrapper}>
          <DarkButton
            name="Contine"
            onPress={() => navigation.navigate('walletHome')}
              disabled={!refcorrect}
          />
        </View>
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
  refWrapper: {
    flex: 2,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  refText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 60,
  },
  input: {
    width: 250,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
    
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'center',
    
    marginBottom: '38.5%',
  },

  textcenter: {
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
  },
});
