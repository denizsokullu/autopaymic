import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Pages/Home';
import Payee from '../Pages/Payee';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomNavigator } from 'react-navigation-tabs';

const HomePageNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: '',
    },
    PayeeIndex: {
      screen: Payee,
      path: '/payee/:id'
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    },
  }
);

export default HomePageNavigator
