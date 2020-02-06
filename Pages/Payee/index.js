import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import ACCOUNTS from '../../data/accounts';
import { payee, removePayee } from '../../Services/PayeeService';

class Payee extends React.Component {
  state = {};

  componentDidMount() {
    payee(this.props.navigation.getParam('id')).then(payee => {
      this.setState({ payee: payee })
      console.log(payee.single_time_contract);
    });
  }

  removePayee() {
    removePayee(this.state.payee.id).then(() => this.props.navigation.goBack());
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.payee ?
          <View>
            <Text>Account Name: {this.state.payee.name}</Text>
            <Text>Account Type: {this.state.payee.type}</Text>
            {
              this.state.payee.single_time_contract ?
              <View>
                <Text>Fixed Payment Amount: {'$' + this.state.payee.single_time_contract.amount}</Text>
              </View>
              :
              <View>
                <Text>Recurring Payment Amount: {'$' + this.state.payee.recurring_contract.amount}</Text>
                <Text>{`Recurring Every: ${this.state.payee.recurring_contract.duration_amount} ${this.state.payee.recurring_contract.duration_type}`}</Text>
              </View>
            }
            <Button title='Remove' onPress={this.removePayee.bind(this)}/>
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
