import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
} from 'react-native';
import { colors } from '../../config/colors';
import '../../../shim' ////// make sure to use es6 import and not require()
import Bitcoin from 'react-native-bitcoinjs-lib'
import 'react-native-get-random-values'
import "@ethersproject/shims"  //for ethers.js
import { ContractFactory, ethers } from "ethers";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/user/user';


export default function AfterMobileVerify({ navigation }) {

  const { email, phone, passcode } = useSelector(s => s.Auth)



  const dispatch = useDispatch()



  const createUserWallet = async () => {
    const keypair = Bitcoin.ECPair.makeRandom();
    console.log(keypair.getAddress());
    console.log(navigation.navigate('recoverySeed'))

    let privateKey =
      '0x0123456789012345678901234567890123456789012345678901234567890123';
    new ethers.Wallet(privateKey);

    let provider = ethers.getDefaultProvider();
    let wallet = new ethers.Wallet(privateKey, provider);
    let randomWallet = ethers.Wallet.createRandom();
    console.log("🚀 ~ file: AfterMobileVerify.js ~ line 28 ~ createUserWal ~ randomWallet", randomWallet.publicKey)

    // let balancePromise = wallet.getBalance();

    // balancePromise.then((balance) => {
    //   console.log(JSON.parse(balance));
    // });

    let userData = {
      email,
      passcode,
      phoneNumber: phone,

    }

    dispatch(registerUser(navigation, userData))
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.main}
        translucent={true}
      />
      <View style={styles.textContainer}>
        <View
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            backgroundColor: 'red',
          }}>
          <Text style={styles.textHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('recoverySeed')}
          onPress={createUserWallet}>
          <Text style={styles.text}>Next</Text>
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
    backgroundColor: colors.main,
  },
  buttonWrapper: {
    marginTop: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: colors.main,
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    padding: (0, 30, 0, 30),
  },
  buttonContainer: {
    flex: 1.5,
  },
  textHeading: {
    backgroundColor: 'white',
    padding: (10, 30, 10, 30),
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

// AppRegistry.registerComponent('AfterMobileVerify', () => AfterMobileVerify);
