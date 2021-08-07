import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Ticksvgscreen from "../../svgs/ticksvg";



export default function ProceedScreen(navigation) {
  return (
    <View style={Styles.container}>

    <Ticksvgscreen/>
      <Text style={Styles.textstyle}>Congratulations</Text>
      <Text style={Styles.textstyle1}>Your YFIC wallet account      has been restored</Text>
      <DarkButton name="Proceed" />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
      margin:10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 29,
    color: '#0B7F42',
  },
  textstyle1: {
      margin:15,
      marginBottom:80,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    
  },
});
