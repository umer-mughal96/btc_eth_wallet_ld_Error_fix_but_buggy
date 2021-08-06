import React, { useEffect } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../config/colors';
import LightButton from '../components/reusable/Button/LightButton';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/auth/auth';
import LinearGradient from 'react-native-linear-gradient';
import { LandingLogo } from '../svgs/LandingLogo';

export default function Landing({ navigation }) {
  const { token } = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0B7F42', '#001A0A']} style={styles.linearGradient}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.main}
          translucent={true}
        />

        <View style={styles.svgWraper}>
          <LandingLogo />
          {/* <Text   id='Yearn_Cash' data-name="Yearn Cash" transform="translate(121.5 511)" fill='#EEF0FF' font-size="39" font-family="Poppins-Semibold, Poppins" font-weight="600" >Yearn Cash</Text> */}
   

<Text style={{color:'#EEF0FF', fontSize:29, fontFamily:'Poppins'}} >
  YEARN CASH
</Text>


        </View>

        <View style={styles.buttonsWrapper}>
          <View style={styles.referalWrapper}>
            <Text 
            style={styles.referalCode}
            onPress={() => navigation.navigate('referralScreen')}
            >Invited? Add Referral Code</Text>
          </View>
          <LightButton
            name="Login"
            onPress={() => {
              navigation.navigate('Signin');
            }}
          />
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.navigate('createPasscode')}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
  linearGradient : {
    width : '100%',
    height : "100%"
  },
  svgWraper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent:'center'
  },
  referalWrapper: {
    width: 200,
  },
  signup: {
    marginTop: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  referalCode: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

