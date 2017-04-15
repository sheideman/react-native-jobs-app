import Expo, {AppLoading} from 'expo';
import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';


import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {screen: WelcomeScreen},
      auth: {screen: AuthScreen},
      main:{
        screen:TabNavigator({
          map:{screen:MapScreen},
          deck: {screen:DeckScreen},
          review:{
            screen: StackNavigator({
              review:{screen:ReviewScreen},
              settings:{screen:SettingsScreen}
              
            })
          }
        },{
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: {fontSize:12}
          }
        })
      }
    },{
      navigationOptions:{
        tabBar: {visible: false}
      },
      lazyLoad: true
    });
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
