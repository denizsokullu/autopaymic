import React from 'react';
import HomePageNavigator from './Navigation/HomePageNavigator';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

const App = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePageNavigator,
      path: 'home',
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor}/>
      }
    }
  },
  {
    initialRouteName: 'HomePage',
    tabBarOptions: {
      showLabel: false,
   },
});

export default createAppContainer(App);
