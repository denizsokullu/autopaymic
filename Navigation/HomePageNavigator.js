import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Pages/Home';
import Payee from '../Pages/Payee';
import PayeeCreate from '../Pages/Payee/PayeeCreate';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
    PayeeCreate: {
      screen: PayeeCreate,
      path: '/payee/new',
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default HomePageNavigator
