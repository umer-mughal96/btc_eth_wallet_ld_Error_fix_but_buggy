import React from 'react'
import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../config/colors';
import DarkButton from '../../components/reusable/Button/DarkButton';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/user/user';

export default function RecoverySeed({navigation}) {

  const dispatch = useDispatch();


    return (
        <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor='white'
          translucent={true}
        />  
        <View style={styles.firstBox}>
            <Text style={styles.RecoverySeed}>Recovery Seed</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => validate(text)}
                value="SA122134PPKIASD"
            />
        </View>

        <View style={styles.secondBox}>
            <Text style={styles.RecoverySeed}>Save this recovery seed,This will be required to 
            recover your Drau Wallet account</Text>
            <DarkButton name="Login" onPress={() => dispatch(registerUser(navigation,"SA122134PPKIASD"))} />
        </View>
       
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    RecoverySeed:{
        fontFamily : 'Poppins-SemiBold',
        fontSize:18,
        textAlign:'center',
        marginBottom:44,
    },
    input: {
        width: 320,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom:44,
      },
      secondBox:{
        flex: 2,
        padding :(0, 20, 0, 20),
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      firstBox:{
        flex: 2,
        justifyContent: 'flex-end',
      }
    
  });
  
