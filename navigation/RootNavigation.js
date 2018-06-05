import React from 'react';
import { Notifications } from 'expo';
import { createSwitchNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation';


import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import SingleProductScreen from '../screens/SingleProductScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import Header from '../components/Header';

//import Header from '../components/Header';

const RootStackNavigator = StackNavigator(
  {

      Login: {
            screen: LoginScreen,
        },

      SingleProduct:
      {
          screen:SingleProductScreen
      },
      Tabs: {
            screen: MainTabNavigator,
        },
        

  },
  {
      navigationOptions: ({ navigation }) => ({
      header: <Header nav={navigation} currentRoute={navigation.state.routeName} />,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  }),
    }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
