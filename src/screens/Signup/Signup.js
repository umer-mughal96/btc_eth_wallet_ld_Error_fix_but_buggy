import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('createPasscode')}
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
