import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import ACCOUNTS from '../../data/accounts';

const Payee = (props) => {
  const data = ACCOUNTS[props.navigation.getParam('id')];
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account Name: {data.account.name}</Text>
      <Button title='Back' onPress={() => props.navigation.goBack()}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
});

export default Payee
