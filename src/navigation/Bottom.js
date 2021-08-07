import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeFi from '../screens/Wallet/DeFi';
import React from 'react';


const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DeFi} />
      <Tab.Screen name="Home1" component={DeFi} />
      <Tab.Screen name="Home2" component={DeFi} />
      <Tab.Screen name="Home3" component={DeFi} />
      <Tab.Screen name="Home4" component={DeFi} />
      
    </Tab.Navigator>
  );
}

export default BottomNavigation;