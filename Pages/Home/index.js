import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';

import AccountCard from '../../Components/AccountCard';
import ACCOUNTS from '../../data/accounts';

const Home = (props) => {

  let data = Object.values(ACCOUNTS);
  const keys = Object.keys(ACCOUNTS);

  data = data.map((account, i) => {
    account.id = keys[i];
    return account;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topText}>
          Total this month for 8 payees: $4250
        </Text>
        <Text style={styles.topText}>
          Total next month for 10 payees: $4600
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <AccountCard data={item} navigation={props.navigation}/>}
        keyExtractor={item => item.id}
      />
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
  item: {
    backgroundColor: 'rgb(215, 215, 215)',
    // padding: 20,
    // marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
  },
  title: {
    fontSize: 32,
  },
  topSection: {
    paddingTop: 6,
    marginBottom: 8,
  },
  topText: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 12,
    paddingRight: 12,
  }
});

export default Home
