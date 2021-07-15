import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';

export default function Btn({name, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
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
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: colors.main,
  },
});
