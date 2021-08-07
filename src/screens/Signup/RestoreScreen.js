import React from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';

export default function RestoreScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <Text style={{marginBottom: 80, fontFamily: 'Poppins-SemiBold'}}>
        
        Choose an option to Restore your YFIC Wallet
      </Text>
      <DarkButton
        name="Recovery Seed"
          onPress={() => navigation.navigate("recoveryRestore")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
