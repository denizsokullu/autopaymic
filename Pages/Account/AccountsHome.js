import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableWithoutFeedback, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { accounts } from '../../Services/AccountService';

import PaymentAccountCard from '../../Components/PaymentAccountCard';
// import PAYMENT_ACCOUNTS from '../../data/paymentAccounts';


class AccountsHome extends React.Component {
  state = {
    accounts: [],
    accountCount: 0,
  }

  fetchData()
  {
    console.log('calling this');
    accounts().then(accounts => {
      const creditCards = accounts.credit_cards;
      const bankAccounts = accounts.bank_accounts;

      const allAccounts = [...creditCards, ...bankAccounts].map((account, index) => {
        account.list_id = index;
        return account;
      })

      this.setState({accountCount: allAccounts.length, accounts: allAccounts});
    });
  }

  componentDidMount() {
    this.fetchData.bind(this)();
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus', this.fetchData.bind(this)
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topText}>{this.state.accountCount} Accounts</Text>
        </View>
        <FlatList
          data={this.state.accounts}
          renderItem={({ item }) => <PaymentAccountCard data={item} navigation={this.props.navigation} loadItems={this.fetchData.bind(this)}/>}
          keyExtractor={item => item.list_id.toString()}
        />

        <Button title='Add new account' onPress={() => navigate('AccountCreate')}/>
      </SafeAreaView>
    );
  }
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
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
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

export default AccountsHome
