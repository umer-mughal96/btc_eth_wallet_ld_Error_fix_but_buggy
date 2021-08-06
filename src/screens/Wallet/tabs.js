
﻿
import { createBottomTabNavigator } from 'areact-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen'; 
// import Findscreen from '../screens/Findscreen';
//  import ChatScreen from '../screens/ChatScreen';
//  import PostScreen from '../screens/PostScreen'; 
// import SettingsScreen from '../screens/SettingsScreen';
// import { Circle } from 'react-native-svg';
import WalletHome from './WalletHome';
const Tab = createBottomTabNavigator();
const Tabs = ()=> {
    
    
    return(
        


       <Tab.createBottomTabNavigator
       tabBarOptions={{showalabel: false,
    style:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        height:90
    }}}
       >
           
            <Tab.Screen name="Home" component={WalletHome} tabBarOptions={
                {
                    tabBarIcon:({focused})=>(
                        <view>
                            <image resizeMode="contain"
                            >
                                
                            </image>
                            <Text>
                                HOME
                            </Text>
                        </view>
                    )
                }
            } />
            <Tab.Screen name="Home" component={WalletHome} />
            <Tab.Screen name="Home" component={WalletHome} />
            <Tab.Screen name="Home" component={WalletHome} />
       </Tab.createBottomTabNavigator>
    );
            

        }
   