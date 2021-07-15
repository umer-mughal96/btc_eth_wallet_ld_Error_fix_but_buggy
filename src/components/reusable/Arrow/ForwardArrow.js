import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

export default function ForwardArrow() {
  return (
    <View style={styles.arrowContainer}>
      <Svg width="7.736" height="13.53" viewBox="0 0 7.736 13.53">
        <Path
          id="Icon_ionic-ios-arrow-forward"
          data-name="Icon ionic-ios-arrow-forward"
          d="M16.65,12.959,11.53,7.843a.963.963,0,0,1,0-1.366.975.975,0,0,1,1.37,0l5.8,5.8a.965.965,0,0,1,.028,1.333L12.9,19.444a.967.967,0,0,1-1.37-1.366Z"
          transform="translate(-11.246 -6.196)"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    color: 'black',
  },
});
