import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import ACCOUNTS from '../../data/accounts';
import { payee } from '../../Services/PayeeService';

class Payee extends React.Component {
  state = {};

  componentDidMount() {
    payee(this.props.navigation.getParam('id')).then(payee => this.setState({ payee: payee }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.payee ?
          <View>
            <Text>Account Name: {this.state.payee.name}</Text>
            <Text>Account Type: {this.state.payee.type}</Text>
            <Button title='Back' onPress={() => this.props.navigation.goBack()}/>
          </View>
          :
          null
        }

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
});

export default Payee
