import React from "react";
import {View,StyleSheet} from "react-native";
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';


  export default function Ticksvgscreen(){
      return(
        <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          
          <Circle
            cx="50"
            cy="50"
            r="25"
            
            strokeWidth="2.5"
            fill="#0A7C40"
          />
        </Svg>
      </View>
      )
  }