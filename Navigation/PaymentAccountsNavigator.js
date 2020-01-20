import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import AccountsHome from '../Pages/Account/AccountsHome';
import BankAccountEdit from '../Pages/Account/BankAccountEdit';
import AccountCreate from '../Pages/Account/AccountCreate';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentAccountsNavigator = createStackNavigator(
  {
    AccountsHome: {
      screen: AccountsHome,
      path: '',
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Payment Accounts',
      })
    },
    // CreditCardEdit: {
    //   screen: CreditCardEdit,
    //   path: 'credit_card',
    //   navigationOptions: ({ navigation }) => ({
    //     headerTitle: 'Credit Card Edit',
    //   })
    // },
    BankAccountEdit: {
      screen: AccountsHome,
      path: 'bank-account',
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Bank Account Edit',
      })
    },
    AccountCreate: {
      screen: AccountCreate,
      path: 'account-create',
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Add new payment account'
      })
    }
  },
  {
    initialRouteName: 'AccountsHome',
  }
);

export default PaymentAccountsNavigator
