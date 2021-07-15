import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';

export default function DarkButton({name, onPress, disabled}) {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 200,
    padding: 10,
    backgroundColor: colors.main,
    textAlign: 'center',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
