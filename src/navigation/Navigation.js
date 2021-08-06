import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup/Signup';
import CreatePasscode from '../screens/Signup/CreatePasscode';
import ConfirmPasscode from '../screens/Signup/ConfirmPasscode';
import CreateEmail from '../screens/Signup/CreateEmail';
import ConfirmEmail from '../screens/Signup/ConfirmEmail';
import EmailVerifyToken from '../screens/Signup/EmailVerifyToken';
import CreateMobile from '../screens/Signup/CreateMobile';
import ConfirmMobile from '../screens/Signup/ConfirmMobile';
import MobileVerifyToken from '../screens/Signup/MobileVerifyToken';
import AfterMobileVerify from '../screens/Signup/AfterMobileVerify';
import RecoverySeed from '../screens/Signup/RecoverySeed';
import WalletHome from '../screens/Wallet/WalletHome';
import DeFi from '../screens/Wallet/DeFi';
import ReferralScreen from '../screens/Signup/ReferralScreen';

export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="referralScreen"
        component={ReferralScreen}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createPasscode"
        component={CreatePasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confrimPasscode"
        component={ConfirmPasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createEmail"
        component={CreateEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmEmail"
        component={ConfirmEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyEmail"
        component={EmailVerifyToken}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createMobile"
        component={CreateMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmMobile"
        component={ConfirmMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyMobile"
        component={MobileVerifyToken}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="afterMobileVerify"
        component={AfterMobileVerify}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="recoverySeed"
        component={RecoverySeed}
      />
      <Stack.Screen
        options={{
          title: 'Wallet',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="walletHome"
        component={WalletHome}
      />
      <Stack.Screen
        options={{
          title: 'De-Fi',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="defi"
        component={DeFi}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
