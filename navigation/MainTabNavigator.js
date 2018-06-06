import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';


import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Header from '../components/Header';

export default TabNavigator(
  {

      Meals:
      {
        screen:HomeScreen
      },
        Settings: {
            screen:SettingsScreen,
        },
},


{
navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Meals':
            iconName =
              Platform.OS === 'ios'
                ? `ios-pizza${focused ? '' : '-outline'}`
                : 'md-pizza';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';

        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? '#ff6600' : Colors.tabIconDefault}/>
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    showLabel: true,
    tabBarOptions: {
        labelStyle: {
            color: 'black',
        },
    }
  }
);
